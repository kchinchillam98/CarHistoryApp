import express from 'express'
import 'dotenv/config'
import Endpoints from './src/routes/Endpoints'
import conectar from './DatabaseConnection'

const app = express();
// JSON Parser para incoming request
app.use(express.json());
// Se incluyen los Endpoints por medio del middleware use
app.use(Endpoints);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server escuchando en puerto ${PORT}`);
});




