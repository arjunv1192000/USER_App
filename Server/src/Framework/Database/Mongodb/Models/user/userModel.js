import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,

    },
    messages: [
        {
          type: String,
        },
      ],
      timestamps: [
        {
          type: Date,
        },
      ],


})
const userdata = model("userdata", userSchema);
export default userdata;