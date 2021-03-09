import {Router} from 'express'
import Vehiculo from './VehiculoEndpoint'
import Taller from './TallerEndpoint'
import Marca from './MarcaEndpoint'
import Reparacion from './ReparacionEndpoint'
import Procedimiento from './ProcedimientoEndpoint'
import Usuario from './UserEndpoint'
import Utils from '../Utils/Utils'

const router = Router();

router.get('/', Utils.verifyToken , (request, response) => {
    response.send('hola');
})

router.use('/vehiculo', Utils.verifyToken, Vehiculo);
router.use('/taller', Utils.verifyToken, Taller);
router.use('/marca', Utils.verifyToken ,Marca);
router.use('/reparacion', Utils.verifyToken, Reparacion);
router.use('/procedimiento', Utils.verifyToken, Procedimiento);
router.use('/usuario', Usuario)


export default router;