import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './Home_Field/Assets/script/routes/post.js';
import path from 'path';
import { fileURLToPath } from 'url';
import Post from './Home_Field/Assets/script/models/Post.js';

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const username = 'judasaor';
const password = 'E34ukEI0PWfEGKqo';
const name = 'HomeField';
const url = `mongodb+srv://${username}:${password}@cluster0.4mp7l7w.mongodb.net/?retryWrites=true&w=majority&appName=${name}`;

app.use(bodyParser.json());
app.use('/Assets', express.static(path.join(__dirname, './Home_Field/Assets')));
app.use('/styles', express.static(path.join(__dirname, './Home_Field/public/styles')));
app.use('/posts', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './Home_Field/public/index.html'));
});
app.get('/obtener-personas', async (req, res) => {
  try {
    const personas = await Post.find();
    res.status(200).json(personas);
  } catch (error) {
    console.error('Error al obtener personas', error);
    res.status(500).send('Error al obtener personas');
  }
});

const emailValidator = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

app.post('/agregar-persona', async (req, res) => {
  const { id_user, username, email, password } = req.body;

  if (!emailValidator(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const newData = new Post({ id_user, username, email, password });
  try {
    const resultado = await newData.save();  

  res.json({ message: 'Datos guardados exitosamente', data: resultado });
  } catch (error) {
    console.error('Error al agregar persona', error);
    res.status(500).send('Error al agregar persona');
  }
});

async function main() {
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Conectado a la base de datos');
}

main().catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
  