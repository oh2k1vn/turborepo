import React from 'react';
import { ArrowRight, Laptop, Moon, Sun } from 'lucide-react';
import { useSearch } from '@/context/search-context';
import { useTheme } from '@/context/theme-context';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@repo/ui/components/command';
import { ScrollArea } from '@repo/ui/components/scroll-area';
import { sidebarData } from './layouts/data/sidebar-data';
import { useNavigate } from '@tanstack/react-router';

export function CommandMenu() {
    const navigate = useNavigate();
    const { setTheme } = useTheme();
    const { open, setOpen } = useSearch();

    const runCommand = React.useCallback(
        (command: () => unknown) => {
            setOpen(false);
            command();
        },
        [setOpen]
    );

    return (
        <CommandDialog modal open={open} onOpenChange={setOpen}>
            <CommandInput placeholder='Nhập lệnh hoặc tìm kiếm...' />
            <CommandList>
                <ScrollArea type='hover' className='h-72 pr-1'>
                    <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
                    {sidebarData.navGroups.map(group => (
                        <CommandGroup key={group.title} heading={group.title}>
                            {group.items.map((navItem, i) => {
                                if (navItem.url)
                                    return (
                                        <CommandItem
                                            key={`${navItem.url}-${i}`}
                                            value={navItem.title}
                                            onSelect={() => {
                                                runCommand(() => navigate({ to: navItem.url }));
                                            }}
                                        >
                                            <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                                                <ArrowRight className='size-2 text-muted-foreground/80' />
                                            </div>
                                            {navItem.title}
                                        </CommandItem>
                                    );

                                return navItem.items?.map((subItem, i) => (
                                    <CommandItem
                                        key={`${subItem.url}-${i}`}
                                        value={subItem.title}
                                        onSelect={() => {
                                            runCommand(() => navigate({ to: subItem.url }));
                                        }}
                                    >
                                        <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                                            <ArrowRight className='size-2 text-muted-foreground/80' />
                                        </div>
                                        {subItem.title}
                                    </CommandItem>
                                ));
                            })}
                        </CommandGroup>
                    ))}
                    <CommandSeparator />
                    <CommandGroup heading='Giao diện'>
                        <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
                            <Sun /> <span>Sáng</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
                            <Moon className='scale-90' />
                            <span>Tối</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
                            <Laptop />
                            <span>Hệ thống</span>
                        </CommandItem>
                    </CommandGroup>
                </ScrollArea>
            </CommandList>
        </CommandDialog>
    );
}
