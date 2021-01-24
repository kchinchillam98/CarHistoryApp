import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import Endpoints from './src/routes/Endpoints'

const app = express();

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to mongoatlas');
});


app.use(Endpoints);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server escuchando en puerto ${PORT}`);
});


export default app;


