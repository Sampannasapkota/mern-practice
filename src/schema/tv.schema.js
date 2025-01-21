let tvSchema= Schema({
    name:{
        type: String,
        required:[true, "Name is required"]
    },

    price:{
        type: Number,
        required:[true, "Price is required"]
    },

    brand:{
        type: String,
        required:[true, "Brand is required"]
    },

   quantity:{
        type: Number,
        required:[true, "Quantity is required"]
    },

    isDigital:{
        type: Boolean,
        required:[true, "isDigital field is required"]
    },

})
let Tv = model("Tv", tvSchema);
export default Tv;