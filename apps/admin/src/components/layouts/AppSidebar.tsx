'use client';

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@repo/ui/components/sidebar';
import * as React from 'react';

import { ScrollArea } from '@repo/ui/components/scroll-area';
import { sidebarData } from './data/sidebar-data';
import { NavGroup } from './NavGroup';
import { TeamSwitcher } from './team-switcher';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible='icon' variant='floating' {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={sidebarData.teams} />
            </SidebarHeader>
            <SidebarContent>
                <ScrollArea>
                    {sidebarData.navGroups.map(props => (
                        <NavGroup key={props.title} {...props} />
                    ))}
                </ScrollArea>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
