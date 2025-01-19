import { Router } from "express";
const homeRouter = Router();

homeRouter
  .route("/")
  .post((req, res, next) => {
    console.log("I will post into database");
  })

  .get((req, res, next) => {
    console.log("I will get all data from database");
  })

  .patch((req, res, next) => {
    console.log("I will update the database");
  })

  .delete((req, res, next) => {
    console.log("I will delete data from database");
  });
export default homeRouter;
