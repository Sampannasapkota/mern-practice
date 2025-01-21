import { model, Schema } from "mongoose";

let employeeSchema= Schema({
    name : {
        type: String,
        required :[true,"Name field is required"]
    },
    age : {
        type: Number,
        required:[true,"Age field is required"]
    },
    isMarried : {
        type: Boolean,
        required :[true,"isMarried field is required"]
    },
    email : {
        type: String,
        required: [true, "Email field is required"]
    },
    phoneNumber: {
        type: Number,
        required:[true,"phoneNumber field is required"]
    }
});


let Employee= model("Employee", employeeSchema);
export default Employee;