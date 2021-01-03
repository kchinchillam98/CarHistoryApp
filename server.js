import express, { request } from 'express'
import 'dotenv/config'
import Endpoints from './src/routes/endpoints'

const app = express();

app.use(Endpoints);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server escuchando en puerto ${PORT}`);
});


export default app;

