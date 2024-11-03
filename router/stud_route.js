import express from "express";
const route = express.Router()
import student_ctrl from "../control/student_control.js";

route.get("/student/", student_ctrl.get_std_data)
route.get("/student/:id", student_ctrl.getById_std_data)
route.post("/student/", student_ctrl.add_std_data)
route.put("/student/:id?", student_ctrl.update_std_data)
route.delete("/student/:id?", student_ctrl.delette_std_data)
// route.get("/", student_ctrl.get_std_data)

export default route; 