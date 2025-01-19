import { Router } from "express";

const propertyRouter = Router();

propertyRouter
  .route("/")
  .post((req, res, next) => {
    console.log(req.body)
    console.log(req.query)
    res.json("Property created successfully");
    
  })
  .get((req, res, next) => {
    res.json("Property read successfully");
  });

propertyRouter
  .route("/:id")
  .get((req, res, next) => {
    res.json("Any property read successfully");
  })
  .patch((req, res, next) => {
    res.json("Any property updated successfully");
  })

  .delete((req, res, next) => {
    res.json("Any property deleted successfully");
  });

export default propertyRouter;
