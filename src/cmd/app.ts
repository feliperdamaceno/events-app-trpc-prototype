import Fastify from 'fastify'

const app = Fastify({
  logger: true
})

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }

  console.log(`Server is now listening on ${address}`)
})
