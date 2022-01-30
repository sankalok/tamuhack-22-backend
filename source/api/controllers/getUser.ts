import { Request, Response } from 'express';

import User from '../../db/user';

export default async (req: Request, res: Response) => {

    const user = await User.find({});

    return res.status(200).json(user);
}