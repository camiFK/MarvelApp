import {Router} from 'express'
import {getApiCharacters} from '../controllers/characters.controller.js'
const router = Router()

router.get('/characters', getApiCharacters);
router.post('/characters');
router.put('/characters/:id');
router.delete('/characters/:id');
router.get('/characters/:id');

export default router;