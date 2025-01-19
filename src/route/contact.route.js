import { Router } from "express";

const contactRouter = Router();

contactRouter
  .route("/")
  .post((req, res, next) => {
    res.json("Contact posted successfully");
  })

  .get((req, res, next) => {
    res.json("Contact read successfully");
  })

  .patch((req, res, next) => {
    res.json("Contact updated successfully");
  })
  .delete((req, res, next) => {
    res.json("Contact deleted successfully");
  });

contactRouter
  .route("/kathmandu")
  .post((req, res, next) => {
    res.json("Kathmandu posted");
  })

  .get((req, res, next) => {
    res.json("Kathmandu read");
  })

  .patch((req, res, next) => {
    res.json("Kathmandu updated");
  })

  .delete((req, res, next) => {
    res.json("Kathmandu deleted");
  });

contactRouter.route("/:id").post((req, res, next) => {
  res.json("I will post into database");
});
export default contactRouter;
