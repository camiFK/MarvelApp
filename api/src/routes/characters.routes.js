import {Router} from 'express'
import {deleteCharacter, getAllCharacters, getCharacter, postCharacter, updateCharacter} from './controllers/characters.controller.js'
const router = Router()

router.get('/characters', getAllCharacters);
router.post('/characters', postCharacter);
router.put('/characters/:id', updateCharacter);
router.delete('/characters/:id', deleteCharacter);
router.get('/characters/:id', getCharacter);

export default router;