// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type POST = {
  title: string
  description: string
  image: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<POST>
) {
  res.status(200).json({ title: 'This is a nice post', description: 'This is a nice post', image: '/coffee.png'})
}
