import {Router} from 'express'
import Vehiculo from './Vehiculo'
import Taller from './Taller'

const router = Router();

router.get('/', (request, response) => {
    response.send('hola');
})

router.use('/vehiculo', Vehiculo);
router.use('/taller', Taller);
/*router.use('/marca', Marca);
router.use('/procedimiento', Procedimiento);*/


export default router;