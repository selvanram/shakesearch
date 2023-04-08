// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query;
  const results = await fetch(`https://pulley-shakesearch.onrender.com/search?q=${query['q']}`, {
    method: 'GET',
  });
  console.log('results ----- ', results);
  const json = await results.json();
  console.log('json ---- ', json)
  return res.status(200).json(json);
}
