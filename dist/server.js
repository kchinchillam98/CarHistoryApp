"use strict";

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

var _Endpoints = _interopRequireDefault(require("./routes/Endpoints"));

var _cors = _interopRequireDefault(require("cors"));

var _DatabaseConnection = _interopRequireDefault(require("./DatabaseConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // JSON Parser para incoming request

app.use(_express.default.json());
app.use((0, _cors.default)()); // Se incluyen los Endpoints por medio del middleware use

app.use(_Endpoints.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server escuchando en puerto ${PORT}`);
});