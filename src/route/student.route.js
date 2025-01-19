import { Router } from "express";

const studentRouter = Router();

studentRouter
  .route("/")
  .post((req, res, next) => {
    res.json("student created successfully");
  })

  .get((req, res, next) => {
    res.json("student read successfully");
  });

studentRouter
  .route("/:id")
  .get((req, res, next) => {
    res.json("any student read successfully");
  })
  .patch((req, res, next) => {
    res.json("any student updated successfully");
  })

  .delete((req, res, next) => {
    res.json("any student deleted successfully");
  });
export default studentRouter;
