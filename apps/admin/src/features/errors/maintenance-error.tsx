import { Button } from '@repo/ui/components/button';

export default function MaintenanceError() {
    return (
        <div className='h-svh'>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                <h1 className='text-[7rem] font-bold leading-tight'>503</h1>
                <span className='font-medium'>Trang web đang được bảo trì!</span>
                <p className='text-center text-muted-foreground'>
                    Trang web này hiện không có sẵn. <br />
                    Chúng tôi sẽ sớm trở lại trực tuyến.
                </p>
                <div className='mt-6 flex gap-4'>
                    <Button variant='outline'>Tìm hiểu thêm</Button>
                </div>
            </div>
        </div>
    );
}
