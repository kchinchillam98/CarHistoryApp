"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const utils = {
  isEmpty: function (obj) {
    return Object.keys(obj).length === 0;
  },
  verifyToken: function (request, response, next) {
    let token = request.header('Authorization');
    if (!token) return response.status(401).json({
      error: 'Acceso denegado'
    });

    try {
      let verificado = _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET);

      request.user = verificado;
      next();
    } catch (error) {
      response.status(403).json({
        error: 'Token invalido'
      });
    }
  }
};
var _default = utils;
exports.default = _default;