import express from "express";
import { Course } from "../app/controller/coursesController.js";

const routerCourse = express.Router();

routerCourse.use("/", Course.index);
export { routerCourse };
