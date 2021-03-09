import { request, response, Router } from 'express'
import UsuarioController from '../controller/UsuarioController'
import { validation, Usuario, loginValidation } from '../model/Usuario'
import Utils from '../Utils/Utils'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const router = Router();

let UsuarioControllerI = new UsuarioController();

//findAll
router.get('/', Utils.verifyToken, async (request, response) => {
    try {
        let listaUsuario = await UsuarioControllerI.findAll();
        response.status(200).json(listaUsuario);

    } catch (error) {
        console.log(`el error es ${error}`)
        response.status(500).json({ message: 'Ocurrio un error', error });
    }
})

//findById
router.get('/:id', Utils.verifyToken,  async (request, response) => {
    let id = request.params.id;
    if (id == null || id === undefined) {
        response.status(400).json({ message: 'id nulo' });
        return;
    }
    try {
        let Result = await UsuarioControllerI.findById(id);
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

    //VALIDANDO DATA USANDO JOI
    let { error } = validation(entity);
    if (error) return response.status(400).send(error.details);

    //validar user duplicado
    //let emailOrUserExist = await Usuario.findOne({}).or([ { email: entity.email}, { user: entity.user}]);
    let emailExist = await Usuario.findOne({ email: entity.email });
    let UserExist = await Usuario.findOne({ user: entity.user });

    if (emailExist) return response.status(400).json({ error: 'email ya existe' });
    if (UserExist) return response.status(400).json({ error: 'user ya existe' });

    try {
        await UsuarioControllerI.create(entity);
        response.status(201).json({ message: 'creado' });

    } catch (error) {
        response.status(500).json({ message: 'Ocurrio un error al crear Usuario', error });

    }
})

/* 
Metodo para hacer login de usuarios
*/
router.post('/login', async (request, response) => {
    let entity = request.body;

    //VALIDANDO DATA USANDO JOI
    let { error } = loginValidation(request.body);
    if (error) return response.status(400).json({ error: error.details[0].message});

    //VALIDAR QUE EMAIL EXISTA
    let user = await Usuario.findOne({ email: entity.email });
    if (!user) return response.status(400).json({ error: 'Email no encontrado' });

    //VALIDANDO PASSWORD
    let validPassword = await bcrypt.compare(entity.password, user.password);
    if(!validPassword)  return response.status(400).json({ error: 'Password invalida'});

    //ASIGNANDO TOKEN 
    let token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, { expiresIn: '10m'});
    response.status(200).json({ AccessToken: token });

})

router.put('/:id', Utils.verifyToken,  async (request, response) => {
    let id = request.params.id;

    if ((id == null || id === undefined) && Utils.isEmpty(request.body)) {
        response.status(400).json({ message: 'id o cuerpo nulos' });
        return;
    }

    try {
        let Result = await UsuarioControllerI.update(id, request.body);
        response.status(200).json({ message: 'updated', Result });

    } catch (error) {
        console.log(`el error es ${error}`)
        response.status(500).json({ message: 'Ocurrio un error al modificar Usuario', error });
    }
})


//delete
router.delete('/:id', Utils.verifyToken,  async (request, response) => {
    let id = request.params.id;
    console.log(id);

    if (id == null || id == ' ') {
        response.status(400).json({ message: 'id nulo' })
    }
    try {
        let result = await UsuarioControllerI.delete(id);
        response.status(200).json({ message: 'deleted', result });

    } catch (error) {
        console.log(`el error es ${error}`)
        response.status(500).json({ message: 'Ocurrio un error al eliminar la Usuario', error });
    }
})



export default router;
