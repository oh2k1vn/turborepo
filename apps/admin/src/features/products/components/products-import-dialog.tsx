import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@repo/ui/components/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import React from 'react';
import { ImagePlus, X } from 'lucide-react';

const formSchema = z.object({
    file: z
        .instanceof(FileList)
        .refine(files => files.length > 0, {
            message: 'Vui lòng tải lên ít nhất một tệp'
        })
        .refine(files => Array.from(files).every(file => ['image/png', 'image/jpeg'].includes(file.type)), {
            message: 'Chỉ chấp nhận định dạng PNG hoặc JPG.'
        })
});

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ImportDialog({ open, onOpenChange }: Props) {
    const [previews, setPreviews] = React.useState<string[]>([]);
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { file: undefined }
    });

    React.useEffect(() => {
        return () => {
            previews.forEach(URL.revokeObjectURL);
        };
    }, [previews]);

    const handleFiles = (files: FileList | null) => {
        if (!files) return; // Kiểm tra null trước khi xử lý

        const newUrls = Array.from(files).map(file => URL.createObjectURL(file));
        setPreviews(prev => [...prev, ...newUrls]);
        form.setValue('file', files); // Đảm bảo form lưu giá trị mới
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleFiles(event.target.files);
    };

    const handleRemoveImage = (index: number) => {
        setPreviews(prev => prev.filter((_, i) => i !== index));
    };

    const onSubmit = async () => {
        const files = form.getValues('file');

        if (files?.length > 0) {
            await toast.promise(new Promise(resolve => setTimeout(resolve, 2000)), {
                loading: 'Đang tải lên...',
                success: `Đã tải lên ${files.length} tệp thành công!`,
                error: 'Tải lên thất bại!'
            });
        }
        setPreviews([]);
        onOpenChange(false);
    };

    return (
        <Dialog
            open={open}
            onOpenChange={val => {
                onOpenChange(val);
                form.reset();
                setPreviews([]);
            }}
        >
            <DialogContent className='gap-2 sm:max-w-sm'>
                <DialogHeader className='text-left'>
                    <DialogTitle>Tải hình ảnh lên</DialogTitle>
                    <DialogDescription>Nhập tác vụ nhanh chóng từ các tệp .png, .jpg.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form id='image-import-form' onSubmit={form.handleSubmit(onSubmit)}>
                        <input type='file' accept='image/png, image/jpeg' multiple ref={fileInputRef} onChange={handleFileChange} className='hidden' />
                        {previews.length > 0 ? (
                            <div className='mt-2 grid grid-cols-3 gap-2'>
                                {previews.map((src, index) => (
                                    <div key={index} className='relative group'>
                                        <img src={src} alt={`preview-${index}`} className='transition-all duration-300 size-24 rounded-md border border-transparent group-hover:border-dashed group-hover:border-slate-600' />
                                        <div
                                            onClick={() => handleRemoveImage(index)}
                                            className='opacity-0 invisible cursor-pointer absolute -top-1 right-1 bg-slate-300 group-hover:bg-slate-600 group-hover:opacity-100 group-hover:visible transition-colors duration-300 text-white rounded-full'
                                        >
                                            <X className='size-4' />
                                        </div>
                                    </div>
                                ))}
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className='size-24 rounded-md border border-dashed border-slate-400 flex justify-center items-center cursor-pointer'
                                >
                                    <ImagePlus />
                                </div>
                            </div>
                        ) : (
                            <FormField
                                control={form.control}
                                name='file'
                                render={() => (
                                    <FormItem className='mb-2 space-y-1'>
                                        <FormLabel>File</FormLabel>
                                        <FormControl>
                                            <Input type='file' accept='image/png, image/jpeg' multiple onChange={handleFileChange} className='h-8' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                    </form>
                </Form>
                <DialogFooter className='gap-2 sm:gap-0'>
                    <DialogClose asChild>
                        <Button variant='outline'>Close</Button>
                    </DialogClose>
                    <Button type='submit' form='image-import-form'>
                        Import
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
