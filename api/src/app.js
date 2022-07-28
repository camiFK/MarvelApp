import express from 'express';
import morgan from "morgan";
import charactersRoutes from './routes/characters.routes.js';
import comicsRoutes from './routes/comics.routes.js';

const app = express();
app.use(express.json());

app.use(charactersRoutes)
app.use(comicsRoutes)
app.use(morgan("dev"));

export default app;