import express from 'express';
import morgan from "morgan";
import charactersRoutes from './routes/characters.routes.js';

const app = express();

app.use(charactersRoutes)
app.use(morgan("dev"));
app.use(express.json());

export default app;