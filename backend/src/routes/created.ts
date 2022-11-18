
import exp from "express";
import { created } from "../controllers/created";
const rCreated = exp.Router();

rCreated.post("/", created );
export default rCreated
