import { Router } from 'express';

import getPosts from './controllers/getPosts';
import createPost from './controllers/createPost';

import createService from './controllers/createService';
import getService from './controllers/getService';

import createUser from './controllers/createUser';
import getUser from './controllers/getUser';
import getUserData from './controllers/getUserData'

import getDefault from './controllers/getDefault';

const router = Router();

router.get('/', getDefault)
router.get('/posts', getPosts);
router.post('/post', createPost);

router.post('/createService', createService)
router.get('/getService', getService)

router.post('/createUser', createUser)
router.get('/getUser', getUser)
router.post('/getUserData', getUserData)

export default router;