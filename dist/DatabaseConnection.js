"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose.default.connection.on('open', () => {
  console.log('Conectado a mongo atlas');
});

_mongoose.default.connection.on('error', e => {
  console.log(e);
});