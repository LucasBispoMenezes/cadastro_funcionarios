import exp from "express";
import getUser from "../controllers/Usuario";

const rUsuario = exp.Router();

rUsuario.post("/login", getUser);

export default rUsuario;
