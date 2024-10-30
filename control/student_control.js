import std_model from "../model/student_info_mdl.js";
class student_ctrl{
    static get_std_data = async (req, resp) =>{
        resp.send("Route is working");
    }
}

export default student_ctrl;
