import {Router} from 'express'
import {getAllCharacters} from './controllers/characters.controller.js'
const router = Router()

router.get('/characters', getAllCharacters);
router.post('/characters');
router.put('/characters/:id');
router.delete('/characters/:id');
router.get('/characters/:id');

export default router;