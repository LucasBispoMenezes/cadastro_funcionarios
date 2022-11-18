import express from "express";
import { midErro } from "./middleware/middleError";
import rUsuario from "./routes/Usuario";
import rCreated from "./routes/created";
import cors from "cors";
import { midCreated } from "./middleware/midlewareCreate";

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

app.use("/usuario", rUsuario);
app.use("/create",  midCreated, rCreated);
app.use(midErro);
export default app;
