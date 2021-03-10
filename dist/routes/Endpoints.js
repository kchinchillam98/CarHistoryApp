"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _VehiculoEndpoint = _interopRequireDefault(require("./VehiculoEndpoint"));

var _TallerEndpoint = _interopRequireDefault(require("./TallerEndpoint"));

var _MarcaEndpoint = _interopRequireDefault(require("./MarcaEndpoint"));

var _ReparacionEndpoint = _interopRequireDefault(require("./ReparacionEndpoint"));

var _ProcedimientoEndpoint = _interopRequireDefault(require("./ProcedimientoEndpoint"));

var _UserEndpoint = _interopRequireDefault(require("./UserEndpoint"));

var _Utils = _interopRequireDefault(require("../Utils/Utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', _Utils.default.verifyToken, (request, response) => {
  response.send('hola');
});
router.use('/vehiculo', _Utils.default.verifyToken, _VehiculoEndpoint.default);
router.use('/taller', _Utils.default.verifyToken, _TallerEndpoint.default);
router.use('/marca', _Utils.default.verifyToken, _MarcaEndpoint.default);
router.use('/reparacion', _Utils.default.verifyToken, _ReparacionEndpoint.default);
router.use('/procedimiento', _Utils.default.verifyToken, _ProcedimientoEndpoint.default);
router.use('/usuario', _UserEndpoint.default);
var _default = router;
exports.default = _default;