import { model, Schema } from "mongoose";

const productSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Product = model("Product", productSchema);

export default Product;
