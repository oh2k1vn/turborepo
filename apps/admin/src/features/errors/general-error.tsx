import { Button } from '@repo/ui/components/button';
import { cn } from '@repo/ui/lib/utils';
import { useNavigate, useRouter } from '@tanstack/react-router';

interface GeneralErrorProps extends React.HTMLAttributes<HTMLDivElement> {
    minimal?: boolean;
}

export default function GeneralError({ className, minimal = false }: GeneralErrorProps) {
    const navigate = useNavigate();
    const { history } = useRouter();
    return (
        <div className={cn('h-svh w-full', className)}>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                {!minimal && <h1 className='text-[7rem] font-bold leading-tight'>500</h1>}
                <span className='font-medium'>Ối! Đã xảy ra lỗi {`:')`}</span>
                <p className='text-center text-muted-foreground'>
                    Chúng tôi xin lỗi vì sự bất tiện này. <br /> Vui lòng thử lại sau.
                </p>
                {!minimal && (
                    <div className='mt-6 flex gap-4'>
                        <Button variant='outline' onClick={() => history.go(-1)}>
                            Quay lại
                        </Button>
                        <Button onClick={() => navigate({ to: '/' })}>Quay lại trang chủ</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
