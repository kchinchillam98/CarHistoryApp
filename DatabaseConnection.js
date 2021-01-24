import mongoose from 'mongoose';
import 'dotenv/config'

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('open', () =>{
    console.log('Conectado a mongo atlas');
})

mongoose.connection.on('error', (e) =>{
    console.log(e);
})
