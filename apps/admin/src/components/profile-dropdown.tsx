import { useAuthStore } from '@/stores/authStore';
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/components/avatar';
import { Button } from '@repo/ui/components/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@repo/ui/components/dropdown-menu';
import { useNavigate } from '@tanstack/react-router';

export function ProfileDropdown() {
    const navigate = useNavigate();
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src='/avatars/01.png' alt='@shadcn' />
                        <AvatarFallback>HN</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-sm font-medium leading-none'>cyberStore</p>
                        <p className='text-xs leading-none text-muted-foreground'>cyberStore@gmail.com</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <a href='/settings'>
                            Hồ sơ cá nhân
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <a href='/settings'>
                            Thanh toán
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <a href='/settings'>
                            Cài đặt
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={async () => {
                        await useAuthStore.getState().resetAccessToken();
                        navigate({ to: '/sign-in', replace: true });
                    }}
                >
                    Đăng xuất
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
