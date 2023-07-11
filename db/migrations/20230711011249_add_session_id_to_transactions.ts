import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.uuid('session_id').index()
  })
}

export async function down(knex: Knex): Promise<void> {
  console.log('Campo session_id deletado com sucesso')
  await knex.schema.alterTable('transactions', (table) => {
    table.dropColumn('session_id')
  })
}
