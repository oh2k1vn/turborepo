import SettingsProfile from '@/features/settings/profile';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_authenticated/settings/')({
    component: SettingsProfile
});
