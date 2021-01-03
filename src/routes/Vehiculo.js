import {Router} from 'express'
const router = Router();

router.get('/', (request, response) => {
    response.send('vehiculo');
})

export default router;