import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  const db = new DB()
  const queryId = request.query.id as string

  response.status(200).json({ data: await db.getById(queryId) })
}

export default allAvos
