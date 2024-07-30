import express from 'express';
const app = express();
import mongoose  from 'mongoose';

app.get('/', (req, res)=>{
    res.send('prueba 1 respuesta del servidor');
});

const password= 'E34ukEI0PWfEGKqo';
const url= "mongodb+srv://judasaor:E34ukEI0PWfEGKqo@cluster0.4mp7l7w.mongodb.net/?retryWrites=true&w=majority&appName=cluster0";

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(url)
    console.log('Se ha conectado con la base de datos');

}

app.listen(10000);