import exp from "express";
import getUser, { getAllUser } from "../controllers/Usuario";

const rUsuario = exp.Router();

rUsuario.post("/login", getUser);
rUsuario.get("/", getAllUser);
rUsuario.post("/create", getUser);
export default rUsuario;
