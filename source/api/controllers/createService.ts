import { Request, Response } from 'express';

import Service from '../../db/service';

export default async (req: Request, res: Response) => {

    const body = req.body;

    if (!body.name || !body.logourl || !body.category || !body.url){
        return res.status(400).json({
            error: "Missing required fields."
        });
    }

    if (typeof body.name !== "string" || typeof body.logourl !== "string" || typeof body.category != "string" || typeof body.url != "string"){
        return res.status(400).json({
            error: "Invalid field types."
        });
    }

    const service = new Service({
        name: body.name,
        logourl: body.logourl,
        category: body.category,
        url: body.url
    });

    await service.save();

    return res.status(201).json(service);
}