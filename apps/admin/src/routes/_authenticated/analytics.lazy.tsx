import ComingSoon from '@/components/coming-soon'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/analytics')({
  component: ComingSoon,
})
