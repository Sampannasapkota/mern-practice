import express, { json } from "express";
import { port } from "./src/constant.js";
import connectToMongoDB from "./src/connectToDb/connectToMongoDb.js";
import errorMiddleware from "./src/middleware/error.middleware.js";
import productRouter from "./src/route/product.route.js";
import homeRouter from "./src/route/home.route.js";
import contactRouter from "./src/route/contact.route.js";
import jobRouter from "./src/route/job.route.js";
import propertyRouter from "./src/route/property.route.js";
import teacherRouter from "./src/route/teacher.route.js";
import studentRouter from "./src/route/student.route.js";
import middleRouter from "./src/route/middleware.js";
import employeeRouter from "./src/route/employee.route.js";
let app = express();

app.use(json()); // always place at top

app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
  connectToMongoDB();
});

app.use("/product", productRouter);
app.use("/", homeRouter);
app.use("/contact", contactRouter);
app.use("/job", jobRouter);
app.use("/employee", employeeRouter)
app.use("/property", propertyRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);
app.use("/middleware", middleRouter)

app.use(errorMiddleware); // always place at last
