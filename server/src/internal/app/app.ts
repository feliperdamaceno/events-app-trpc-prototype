import Fastify, { type FastifyInstance } from 'fastify'

import { Config } from '../../config/config.js'

import cors, { type FastifyCorsOptions } from '@fastify/cors'

export function CreateApp(): FastifyInstance {
  const fastify = Fastify({
    logger: Config.logger
  })

  fastify.register(cors, {
    origin: '*'
  } satisfies FastifyCorsOptions)

  return fastify
}
