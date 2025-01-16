import expressAsyncHandler from "express-async-handler";
import Product from "../schema/product.schema.js";

export const createProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      result: result,
    });
  }
);
export const readAllProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.find({});
    res.status(200).json({
      success: true,
      message: "Product read successfully.",
      result: result,
    });
  }
);

export const readSpecificProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product read successfully.",
      result: result,
    });
  }
);
export const updateProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Product updated successfully.",
      result: result,
    });
  }
);
export const deleteProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
      result: result,
    });
  }
);
