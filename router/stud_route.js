import express from "express";
const route = express.Router()
import student_ctrl from "../control/student_control.js";

route.get("/", student_ctrl.get_std_data)

export default route;