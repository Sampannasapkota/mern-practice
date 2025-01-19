import { Router } from "express";

const jobRouter = Router();

jobRouter
  .route("/")
  .post((req, res, next) => {
    res.json("I will post into database");
  })
  .get((req, res, next) => {
    res.json("I will get database");
  })
  .patch((req, res, next) => {
    res.json("I will update into database");
  })
  .delete((req, res, next) => {
    res.json("I will delete into database");
  });

export default jobRouter;
