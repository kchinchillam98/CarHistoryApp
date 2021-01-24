import {Router} from 'express'
import Marca from '../model/Marca'
const router = Router();



 router.get('/', async (request, response) => {
    
    let listaMarca = await Marca.find({});
    console.log(listaMarca);

    response.json(listaMarca);
})

export default router;