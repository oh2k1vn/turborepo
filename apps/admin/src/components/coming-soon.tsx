import { Clover } from 'lucide-react';

export default function ComingSoon() {
    return (
        <div className='h-svh'>
            <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
                <Clover size={72} />
                <h1 className='text-4xl font-bold leading-tight'>Sắp ra mắt 👀</h1>
                <p className='text-center text-muted-foreground'>
                    Trang này chưa được tạo. <br />
                    Hãy theo dõi mặc dù!
                </p>
            </div>
        </div>
    );
}
