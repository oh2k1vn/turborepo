import { createFileRoute, redirect } from '@tanstack/react-router'
import Dashboard from '@/features/dashboard'
import { useAuthStore } from '@/stores/authStore'

export const Route = createFileRoute('/_authenticated/')({
  component: Dashboard,
  beforeLoad: async ({ location }) => {
    if (!await useAuthStore.getState().accessToken) {
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})
