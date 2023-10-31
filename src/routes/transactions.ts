import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export function TransactionsRoutes(app: FastifyInstance) {
  app.get('transactions', async () => {
    const transactions = await knex('transactions').select('*')
    return transactions
  })
}
