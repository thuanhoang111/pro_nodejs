import express from "express";
import { Student } from "../app/controller/StudentController.js";
const routerStudent = express.Router();

routerStudent.post("/add", Student.add);
routerStudent.use("/:id", Student.findById);
routerStudent.use("/", Student.index);

export { routerStudent };
