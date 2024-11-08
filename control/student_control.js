import mongoose from "mongoose";
import std_model from "../model/student_info_mdl.js";

class student_ctrl {
  static get_std_data = async (req, resp) => {
    try {
      const get_record = await std_model.find();
      console.log(get_record);
      resp.send(get_record);
    } catch (error) {
      console.log(error);
      resp.send(error._message);
    }
  };

  static getById_std_data = async (req, resp) => {
    try {
      if (
        req.params.id == undefined ||
        req.params.id.trim() == "" ||
        !mongoose.Types.ObjectId.isValid(req.params.id)
      ) {
        resp.send(
          `Valid ID required to get record, you gave this = "${req.params.id}"`
        );
      } else {
        const get_record = await std_model.findById(req.params.id);
        console.log(get_record);
        resp.send(get_record);
      }
    } catch (error) {
      console.log(error);
      resp.send(error);
    }
  };

  static add_std_data = async (req, resp) => {
    try {
      const std_dat_modl = new std_model(req.body);
      const data_result = await std_dat_modl.save();
      console.log(data_result);
      resp.send(
        `New record Created successfully with this ID  ${data_result._id}`
      );
    } catch (error) {
      console.log(error);
      resp.send(error._message);
    }
  };

  static update_std_data = async (req, resp) => {
    try {
      if (
        req.params.id == undefined ||
        req.params.id.trim() == "" ||
        !mongoose.Types.ObjectId.isValid(req.params.id)
      ) {
        resp.send(
          `Valid ID required to update record, you gave this = "${req.params.id}"`
        );
      } else {
        const update_record = await std_model.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );
        console.log(update_record);
        resp.send(update_record);
      }
    } catch (error) {
      console.log(error);
      resp.send(error);
    }
  };

  static delette_std_data = async (req, resp) => {
    try {
      if (
        req.params.id == undefined ||
        req.params.id.trim() == "" ||
        !mongoose.Types.ObjectId.isValid(req.params.id)
      ) {
        resp.send(
          `Valid ID required to delete record, you gave this = "${req.params.id}"`
        );
      } else {
        const delete_record = await std_model.findByIdAndDelete(req.params.id, { new: true });
        if (delete_record == null) {
          console.log(`This Id does not exist > ${req.params.id}`);
          resp.send(`This Id does not exist > ${req.params.id}`);
        }else{
          console.log(`This Id has deleted > ${req.params.id}`);
          resp.send(`This Id has deleted > ${req.params.id}`);
        }
      }
    } catch (error) {
      console.log(error);
      resp.send(error);
    }
  };
}

export default student_ctrl;
