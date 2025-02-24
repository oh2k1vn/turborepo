import { HTMLAttributes, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from '@tanstack/react-router';
import { cn } from '@repo/ui/lib/utils';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { PasswordInput } from '@repo/ui/components/password-input';
import { Button } from '@repo/ui/components/button';
import { Github, Facebook } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { toast } from 'sonner';
import { useLogin } from '@/api/auth';

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

const formSchema = z.object({
    identifier: z.union([z.string().email({ message: 'Địa chỉ email không hợp lệ' }), z.string().min(1, { message: 'Vui lòng nhập tên người dùng của bạn' })]),
    password: z.string().min(1, { message: 'Please enter your password' }).min(4, { message: 'Mật khẩu phải dài ít nhất 7 ký tự' })
});

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const navigate = useNavigate();
    const loginMutation = useLogin();

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            identifier: '',
            password: ''
        }
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        if (data.identifier == 'admin' && data.password == 'admin') {
            loginMutation.mutate(
                { userName: data.identifier },
                {
                    onSuccess: async data => {
                        await useAuthStore.getState().setAccessToken(data);
                        await navigate({ to: '/' });
                        await setIsLoading(false);
                        await toast.success('Đăng nhập thành công!');
                    },
                    onError: async error => {
                        await setIsLoading(false);
                        toast.warning('Tài khoản không hợp lệ!');
                    }
                }
            );
        } else {
            toast.warning('Tài khoản không hợp lệ!');
            setIsLoading(false);
        }
    };

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='grid gap-2'>
                        <FormField
                            control={form.control}
                            name='identifier'
                            render={({ field }) => (
                                <FormItem className='space-y-1'>
                                    <FormLabel>Email và Tên người dùng</FormLabel>
                                    <FormControl>
                                        <Input placeholder='name@example.com hoặc name' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem className='space-y-1'>
                                    <div className='flex items-center justify-between'>
                                        <FormLabel>Mật khẩu</FormLabel>
                                        <Link to='/' className='text-sm font-medium text-muted-foreground hover:opacity-75'>
                                            Quên mật khẩu?
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <PasswordInput placeholder='********' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='mt-2' disabled={isLoading}>
                            Đăng nhập
                        </Button>

                        <div className='relative my-2'>
                            <div className='absolute inset-0 flex items-center'>
                                <span className='w-full border-t' />
                            </div>
                            <div className='relative flex justify-center text-xs uppercase'>
                                <span className='bg-background px-2 text-muted-foreground'>hoặc đăng nhập bằng</span>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Button variant='outline' className='w-full' type='button' disabled={isLoading}>
                                <Github className='h-4 w-4' /> GitHub
                            </Button>
                            <Button variant='outline' className='w-full' type='button' disabled={isLoading}>
                                <Facebook className='h-4 w-4' /> Facebook
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
