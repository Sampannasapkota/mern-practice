import express, { json } from "express";
import { port } from "./src/constant.js";
import connectToMongoDB from "./src/connectToDb/connectToMongoDb.js";
import errorMiddleware from "./src/middleware/error.middleware.js";
import productRouter from "./src/route/product.route.js";
import homeRouter from "./src/route/home.route.js";
let app = express();

app.use(json()); // always place at top

app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
  connectToMongoDB();
});

app.use("/product", productRouter);
app.use("/", homeRouter);

app.use(errorMiddleware); // always place at last
