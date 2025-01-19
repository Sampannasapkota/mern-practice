import { Router } from "express";

const teacherRouter = Router();
teacherRouter
  .route("/")
  .post((req, res, next) => {
    res.json("Teacher created successfully");
  })
  .get((req, res, next) => {
    res.json("Teacher read successfully");
  });

teacherRouter
  .route("/:id")
  .get((req, res, next) => {
    res.json("any teacher read successfully");
  })
  .patch((req, res, next) => {
    res.json("Any teacher updated successfully");
  })

  .delete((req, res, next) => {
    res.json("any teacher deleted successfully");
  });

export default teacherRouter;
