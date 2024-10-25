import { createTRPCClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '@server/types'

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc'
    })
  ]
})
