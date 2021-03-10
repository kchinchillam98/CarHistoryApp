import express from 'express'
import 'dotenv/config'
import Endpoints from './routes/Endpoints'
import cors from 'cors'
import conectar from './DatabaseConnection'

const app = express();
// JSON Parser para incoming request
app.use(express.json());
app.use(cors());
// Se incluyen los Endpoints por medio del middleware use
app.use(Endpoints);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`server escuchando en puerto ${PORT}`);
});




