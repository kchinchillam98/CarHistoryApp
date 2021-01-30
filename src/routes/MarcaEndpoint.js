import { request, response, Router } from 'express'
import MarcaController from '../controller/MarcaController'
import Utils from '../Utils/Utils'
const router = Router();

let MarcaControllerI = new MarcaController();

//findAll
router.get('/', async (request, response) => {
    try {
        let listaMarca = await MarcaControllerI.findAll();
        response.status(200).json(listaMarca);

    } catch (error) {
        console.log(`el error es ${error}`)
        response.status(500).json({ message: 'Ocurrio un error', error });
    }
})

//findById
router.get('/:id', async (request, response) => {
    let id = request.params.id;
    if (id == null || id === undefined) {
        response.status(400).json({ message: 'id nulo' });
        return;
    }
    try {
        let Result = await MarcaControllerI.findById(id);
        if (Result == null) {
            response.status(404).json({ message: 'No se encontro el registro' });
        }
        response.status(200).json(Result);
    } catch (error) {
        console.log(`el error es ${error}`)
        response.status(500).json({ message: 'Ocurrio un error', error });
    }
})

//create
router.post('/', async (request, response) => {
    let entity = request.body;
    console.log(entity);


    if (Utils.isEmpty(entity)) {
        response.status(400).json({ message: 'cuerpo vacio' });
        return;
    }
    try {
        await MarcaControllerI.create(entity);
        response.status(201).json({ message: 'creado' });

    } catch (error) {
        response.status(500).json({ message: 'Ocurrio un error al crear marca', error });
        
    }
})

router.put('/:id', async (request, response) => {
    let id = request.params.id;

    if ((id == null || id === undefined) && (request.body == null || request.body === undefined)) {
        response.status(400).json({ message: 'id o cuerpo nulos' });
        return;
    }

    try {
        let Result = await MarcaControllerI.update(reques.params.id, request.body);
        response.status(200).json({ message: 'updated', Result });

    } catch (error) {
        console.log(`el error es ${error}`)
        response.status(500).json({ message: 'Ocurrio un error al modificar marca', error });
    }
})


//delete
router.delete('/:id', async (request, response) => {
    let id = request.params.id;
    console.log(id);

    if (id == null || id == ' ') {
        response.status(400).json({ message: 'id nulo' })
    }
    try {
        let result = await MarcaControllerI.delete(id);
        response.status(200).json({ message: 'deleted', result });

    } catch (error) {
        console.log(`el error es ${error}`)
        response.status(500).json({ message: 'Ocurrio un error al eliminar la marca', error });
    }
})



export default router;
