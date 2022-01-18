import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (
  request: IncomingMessage,
  response: ServerResponse
): Promise<void> => {
  const db = new DB()
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({ data: await db.getAll() }))
}

export default allAvos
