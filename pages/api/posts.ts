// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type POST = {
  title: string;
  description: string;
  image: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<POST[]>
) {
  res.status(200).json([
    {
      title: 'nice post',
      description: 'This is a nice post',
      image: '/coffee.png',
    },
    {
      title: 'nice post2',
      description: 'This is a nice post2',
      image: '/coffee.png',
    },
    {
      title: 'nice post3',
      description: 'This is a nice post3',
      image: '/coffee.png',
    },
    {
      title: 'nice post4',
      description: 'This is a nice post4',
      image: '/coffee.png',
    },
    {
      title: 'nice post5',
      description: 'This is a nice post5',
      image: '/coffee.png',
    },
    {
      title: 'nice post6',
      description: 'This is a nice post6',
      image: '/coffee.png',
    },
  ]);
}
