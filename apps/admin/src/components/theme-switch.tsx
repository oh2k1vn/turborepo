import { useEffect } from 'react';
import { Check, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/theme-context';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@repo/ui/components/dropdown-menu';
import { Button } from '@repo/ui/components/button';
import { cn } from '@repo/ui/lib/utils';

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const themeColor = theme === 'dark' ? '#020817' : '#fff';
        const metaThemeColor = document.querySelector("meta[name='theme-color']");
        if (metaThemeColor) metaThemeColor.setAttribute('content', themeColor);
    }, [theme]);

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' className='scale-95 rounded-full'>
                    <Sun className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                    <Moon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                    <span className='sr-only'>Chuyển đổi chủ đề</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    Sáng <Check size={14} className={cn('ml-auto', theme !== 'light' && 'hidden')} />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Tối
                    <Check size={14} className={cn('ml-auto', theme !== 'dark' && 'hidden')} />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    Hệ thống
                    <Check size={14} className={cn('ml-auto', theme !== 'system' && 'hidden')} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
