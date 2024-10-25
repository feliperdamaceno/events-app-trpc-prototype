import {
  fastifyTRPCPlugin,
  type FastifyTRPCPluginOptions
} from '@trpc/server/adapters/fastify'
import { type FastifyInstance } from 'fastify'
import { createContext } from './context.js'
import { router } from './trpc.js'

import { EventsHandler } from '../handler/events.handler.js'

export const TRPCRouter = router({
  events: EventsHandler
})

export function LoadRoutes(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    return { message: 'Server Working!' }
  })

  fastify.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
      router: TRPCRouter,
      createContext,
      onError({ path, error }) {
        console.error(`Error in tRPC handler on path '${path}':`, error)
      }
    } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions']
  })
}

export type AppRouter = typeof TRPCRouter
