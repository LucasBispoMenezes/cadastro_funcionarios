import express from "express";
import { midErro } from "./middleware/middleError";
import rUsuario from "./routes/Usuario";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

app.use("/usuario", rUsuario);
app.use(midErro);
export default app;
