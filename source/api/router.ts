import { Router } from 'express';

import getPosts from './controllers/getPosts';
import createPost from './controllers/createPost';

import createService from './controllers/createService';
import getService from './controllers/getService';

import createUser from './controllers/createUser';

const router = Router();

router.get('/posts', getPosts);
router.post('/post', createPost);

router.post('/createService', createService)
router.get('/getService', getService)

router.post('/createUser', createUser)

export default router;