import { Request, Response } from 'express';

import User from '../../db/user';

export default async (req: Request, res: Response) => {

    const body = req.body;

    if (!body.displayName || !body.user_id || !body.password || !body.subscriptions || !body.contacts){
        return res.status(400).json({
            error: "Missing required fields."
        });
    }

    if (typeof body.displayName !== "string" || typeof body.user_id !== "string" || typeof body.password != "string"){
        return res.status(400).json({
            error: "Invalid field types."
        });
    }

    const user = new User({
        displayName: body.displayName,
        user_id: body.user_id,
        password: body.password,
        subscriptions: body.subscriptions,
        contacts: body.contacts
    });

    await user.save();

    return res.status(201).json(user);
}