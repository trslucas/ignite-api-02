import fastify from 'fastify'
import { knex } from './database'

const app = fastify()
const port = 3333

app.get('/', async () => {
  const transaction = await knex('transactions').select('*')

  return transaction
})

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`server is running on port ${port}`)
  })
