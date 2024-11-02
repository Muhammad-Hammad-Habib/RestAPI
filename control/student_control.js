import std_model from "../model/student_info_mdl.js";
class student_ctrl {
  static get_std_data = async (req, resp) => {
    try {
      resp.send("Route is working");
    } catch (error) {
      console.log(error);
      resp.send(error._message);
    }
  };
  static add_std_data = async (req, resp) => {
    try {
      const std_dat_modl = new std_model(req.body);
      const data_result = await std_dat_modl.save();
      console.log(data_result);
      resp.send(`New record Created successfully with this ID  ${data_result._id}`);
    } catch (error) {
      console.log(error);
      resp.send(error._message);
    }

    // resp.send(2"post is working")
  };
}

export default student_ctrl;
