import express from "express";
import rUsuario from "./routes/Usuario";

const app = express();

app.use("usuario", rUsuario);
app.use(express.json());

export default app;
