import express from 'express';
import { getPosts, getpost } from '../controller/post.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/blogdetails/:id', getpost);


export default router;