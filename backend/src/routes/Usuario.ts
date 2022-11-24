import exp from "express";
import service from "../controllers/Usuario";

const rUsuario = exp.Router();

rUsuario.post("/login", service.getUser);
rUsuario.get("/", service.getAllUser);

export default rUsuario;
