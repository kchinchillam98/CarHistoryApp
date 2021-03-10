"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UsuarioController = _interopRequireDefault(require("../controller/UsuarioController"));

var _Usuario = require("../model/Usuario");

var _Utils = _interopRequireDefault(require("../Utils/Utils"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
let UsuarioControllerI = new _UsuarioController.default(); //findAll

router.get('/', _Utils.default.verifyToken, async (request, response) => {
  try {
    let listaUsuario = await UsuarioControllerI.findAll();
    response.status(200).json(listaUsuario);
  } catch (error) {
    console.log(`el error es ${error}`);
    response.status(500).json({
      message: 'Ocurrio un error',
      error
    });
  }
}); //findById

router.get('/:id', _Utils.default.verifyToken, async (request, response) => {
  let id = request.params.id;

  if (id == null || id === undefined) {
    response.status(400).json({
      message: 'id nulo'
    });
    return;
  }

  try {
    let Result = await UsuarioControllerI.findById(id);

    if (Result == null) {
      response.status(404).json({
        message: 'No se encontro el registro'
      });
    }

    response.status(200).json(Result);
  } catch (error) {
    console.log(`el error es ${error}`);
    response.status(500).json({
      message: 'Ocurrio un error',
      error
    });
  }
}); //create

router.post('/', async (request, response) => {
  let entity = request.body; //VALIDANDO DATA USANDO JOI

  let {
    error
  } = (0, _Usuario.validation)(entity);
  if (error) return response.status(400).send(error.details); //validar user duplicado
  //let emailOrUserExist = await Usuario.findOne({}).or([ { email: entity.email}, { user: entity.user}]);

  let emailExist = await _Usuario.Usuario.findOne({
    email: entity.email
  });
  let UserExist = await _Usuario.Usuario.findOne({
    user: entity.user
  });
  if (emailExist) return response.status(400).json({
    error: 'email ya existe'
  });
  if (UserExist) return response.status(400).json({
    error: 'user ya existe'
  });

  try {
    await UsuarioControllerI.create(entity);
    response.status(201).json({
      message: 'creado'
    });
  } catch (error) {
    response.status(500).json({
      message: 'Ocurrio un error al crear Usuario',
      error
    });
  }
});
/* 
Metodo para hacer login de usuarios
*/

router.post('/login', async (request, response) => {
  let entity = request.body; //VALIDANDO DATA USANDO JOI

  let {
    error
  } = (0, _Usuario.loginValidation)(request.body);
  if (error) return response.status(400).json({
    error: error.details[0].message
  }); //VALIDAR QUE EMAIL EXISTA

  let user = await _Usuario.Usuario.findOne({
    email: entity.email
  });
  if (!user) return response.status(400).json({
    error: 'Email no encontrado'
  }); //VALIDANDO PASSWORD

  let validPassword = await _bcryptjs.default.compare(entity.password, user.password);
  if (!validPassword) return response.status(400).json({
    error: 'Password invalida'
  }); //ASIGNANDO TOKEN 

  let token = _jsonwebtoken.default.sign({
    _id: user._id
  }, process.env.TOKEN_SECRET, {
    expiresIn: '10m'
  });

  response.status(200).json({
    AccessToken: token
  });
});
router.put('/:id', _Utils.default.verifyToken, async (request, response) => {
  let id = request.params.id;

  if ((id == null || id === undefined) && _Utils.default.isEmpty(request.body)) {
    response.status(400).json({
      message: 'id o cuerpo nulos'
    });
    return;
  }

  try {
    let Result = await UsuarioControllerI.update(id, request.body);
    response.status(200).json({
      message: 'updated',
      Result
    });
  } catch (error) {
    console.log(`el error es ${error}`);
    response.status(500).json({
      message: 'Ocurrio un error al modificar Usuario',
      error
    });
  }
}); //delete

router.delete('/:id', _Utils.default.verifyToken, async (request, response) => {
  let id = request.params.id;
  console.log(id);

  if (id == null || id == ' ') {
    response.status(400).json({
      message: 'id nulo'
    });
  }

  try {
    let result = await UsuarioControllerI.delete(id);
    response.status(200).json({
      message: 'deleted',
      result
    });
  } catch (error) {
    console.log(`el error es ${error}`);
    response.status(500).json({
      message: 'Ocurrio un error al eliminar la Usuario',
      error
    });
  }
});
var _default = router;
exports.default = _default;