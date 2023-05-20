import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { db } = await connectToDatabase();
    const data = await db.collection("listingsAndReviews").find({}).limit(20).toArray();
    console.log(data);
    res.json(data);
}