import { z } from 'zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@tanstack/react-router';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/select';
import { Textarea } from '@repo/ui/components/textarea';
import { cn } from '@repo/ui/lib/utils';
import { Button } from '@repo/ui/components/button';
import { toast } from 'sonner';

const profileFormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: 'Tên người dùng phải có ít nhất 2 ký tự.'
        })
        .max(30, {
            message: 'Tên người dùng không được dài hơn 30 ký tự.'
        }),
    email: z
        .string({
            required_error: 'Vui lòng chọn email để hiển thị.'
        })
        .email(),
    bio: z.string().max(160).min(4),
    urls: z
        .array(
            z.object({
                value: z.string().url({ message: 'Vui lòng nhập một URL hợp lệ.' })
            })
        )
        .optional()
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {};

export default function ProfileForm() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues,
        mode: 'onChange'
    });

    const { fields, append } = useFieldArray({
        name: 'urls',
        control: form.control
    });

    function onSubmit(data: ProfileFormValues) {
        toast(
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
            </pre>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên người dùng</FormLabel>
                            <FormControl>
                                <Input placeholder='shadcn' {...field} />
                            </FormControl>
                            <FormDescription>
                                Đây là tên hiển thị công khai của bạn. Đó có thể là tên thật của bạn hoặc một bút danh. Bạn chỉ có thể thay đổi điều này 30 ngày một lần.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Select a verified email to display' />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value='m@example.com'>m@example.com</SelectItem>
                                    <SelectItem value='m@google.com'>m@google.com</SelectItem>
                                    <SelectItem value='m@support.com'>m@support.com</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Bạn có thể quản lý các địa chỉ email đã được xác minh trong <Link to='/'>email settings</Link>.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='bio'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tiểu sử</FormLabel>
                            <FormControl>
                                <Textarea placeholder='Người đẹp trai nhất vũ trụ' className='resize-none' {...field} />
                            </FormControl>
                            <FormDescription>
                                bạn có thể <span>@mention</span> những người dùng và tổ chức khác liên kết với họ.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                    {fields.map((field, index) => (
                        <FormField
                            control={form.control}
                            key={field.id}
                            name={`urls.${index}.value`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={cn(index !== 0 && 'sr-only')}>Đường dẫn</FormLabel>
                                    <FormDescription className={cn(index !== 0 && 'sr-only')}>
                                        Thêm liên kết vào trang web, blog hoặc hồ sơ truyền thông xã hội của bạn.
                                    </FormDescription>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button type='button' variant='outline' size='sm' className='mt-2' onClick={() => append({ value: '' })}>
                        Thêm đường dẫn
                    </Button>
                </div>
                <Button type='submit'>Cập nhật hồ sơ</Button>
            </form>
        </Form>
    );
}
