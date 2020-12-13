import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://siva:Siva@123@cluster0.nbn4q.mongodb.net/cmsapp?retryWrites=true&w=majority';
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

app.use('/posts', postRoutes)

mongoose.set('useFindAndModify', false);