import express from "express";
import { midErro } from "./middleware/middleError";
import rUsuario from "./routes/Usuario";

const app = express();
app.use(express.json());


app.use("/usuario", rUsuario);
app.use(midErro)
export default app;
