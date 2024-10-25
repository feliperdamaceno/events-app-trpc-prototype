import {
  fastifyTRPCPlugin,
  type FastifyTRPCPluginOptions
} from '@trpc/server/adapters/fastify'
import { type FastifyInstance } from 'fastify'
import { TRPCRouter, type AppRouter } from '../handler/trpc.js'
import { createContext } from './context.js'

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
