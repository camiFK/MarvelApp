import {Router} from 'express'
import { getComics } from './controllers/comics.controller.js';
const router = Router()

router.get('/comics', getComics);

export default router;