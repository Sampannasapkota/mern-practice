import { model, Schema } from "mongoose";

let contactSchema= Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    address: {
        type: String,
        required: [true,"address is required"]
    },
    phoneNumber: {
        type: String,
        required: [true, "phoneNumber is required"]
    },
    email: {
        type: String,
        required:[true, "email is required"]
    },
})



let Contact= model(Contact, contactSchema);

export default Contact;