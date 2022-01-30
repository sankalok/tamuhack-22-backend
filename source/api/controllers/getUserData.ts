import { Request, Response } from 'express';

import User from '../../db/user';

export default async (req: Request, res: Response) => {

    const body = req.body

    const user = await User.findOne({user_id : body.user_id});

    return res.status(200).json(user);
}