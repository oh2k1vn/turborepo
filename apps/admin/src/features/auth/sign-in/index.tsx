import { Card } from '@repo/ui/components/card';
import AuthLayout from '../auth-layout';
import { UserAuthForm } from './components/user-auth-form';

export default function SignIn() {
    return (
        <AuthLayout>
            <Card className='p-6'>
                <h1 className='text-2xl font-semibold tracking-tight text-center mb-4'>Đăng nhập</h1>

                <UserAuthForm />
                <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
                    Bằng cách nhấp vào đăng nhập, bạn đồng ý với chúng tôi{' '}
                    <a href='/terms' className='underline underline-offset-4 hover:text-primary'>
                        Điều khoản dịch vụ
                    </a>{' '}
                    và{' '}
                    <a href='/privacy' className='underline underline-offset-4 hover:text-primary'>
                        Chính sách bảo mật
                    </a>
                    .
                </p>
            </Card>
        </AuthLayout>
    );
}
