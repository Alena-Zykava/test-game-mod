// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

import {generateGamers} from '@/pages/api/constants'
import {ResponseProps} from '@/pages/api/types'

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseProps>) {
  res.status(200).json({winners: generateGamers(50), losers: generateGamers(50)})
}
