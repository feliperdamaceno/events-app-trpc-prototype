import Fastify, { type FastifyInstance } from 'fastify'

import { Config } from '../../config/config.js'

export function CreateApp(): FastifyInstance {
  return Fastify({
    logger: Config.logger
  })
}
