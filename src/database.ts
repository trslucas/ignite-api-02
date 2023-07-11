import 'dotenv/config'
import { knex as setupNext, Knex } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE NOT FOUND')
}
export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupNext(config)
