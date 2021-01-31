import {Router} from 'express'
import Vehiculo from './VehiculoEndpoint'
import Taller from './TallerEndpoint'
import Marca from './MarcaEndpoint'
import Reparacion from './ReparacionEndpoint'
import Procedimiento from './ProcedimientoEndpoint'

const router = Router();

router.get('/', (request, response) => {
    response.send('hola');
})

router.use('/vehiculo', Vehiculo);
router.use('/taller', Taller);
router.use('/marca', Marca);
router.use('/reparacion', Reparacion);
router.use('/procedimiento', Procedimiento);


export default router;