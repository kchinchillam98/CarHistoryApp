import express from 'express'
import 'dotenv/config'
import Endpoints from './src/routes/Endpoints'
import conectar from './DatabaseConnection'
import Marca from './src/model/Marca'

const app = express();

app.use(Endpoints);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server escuchando en puerto ${PORT}`);
});




