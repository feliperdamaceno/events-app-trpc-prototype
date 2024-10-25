import { CreateApp } from '../internal/app/app.js'
import { LoadRoutes } from '../internal/app/routes.js'
import { Config } from '../config/config.js'

const fastify = CreateApp()
LoadRoutes(fastify)

fastify.listen({ port: Config.port }, async (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  console.log(`Server is now listening on ${address}`)
})
