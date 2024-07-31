import express from 'express';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/post.js';
//import new_user from './index.js';

const app = express();
const username= 'judasaor';
const password= 'E34ukEI0PWfEGKqo';
const name= 'cluster0';
const url= `mongodb+srv://${username}:${password}@cluster0.4mp7l7w.mongodb.net/?retryWrites=true&w=majority&appName=${name}`;

app.use( bodyParser.json());

app.use('/posts',router);

app.get('/', (req, res)=>{
    res.send('prueba 1 respuesta del servidor');
});

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(url)
    console.log('Se ha conectado con la base de datos');

}

app.listen(10000);