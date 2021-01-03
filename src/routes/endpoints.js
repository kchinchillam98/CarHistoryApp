import {Router} from 'express'
const router = Router();

router.get('/', (request, response) => {
    response.send('hola');
})

export default router;