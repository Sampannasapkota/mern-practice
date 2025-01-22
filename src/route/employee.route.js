import { Router } from "express";
import Employee from "../schema/employee.schema.js";
import { createEmployeeController, deleteEmployeeController, readAllEmployeeController, readSpecificEmployeeController, updateEmployeeController } from "../controller/employee.controller.js";

let employeeRouter= Router()

employeeRouter
.route("/")
.post(createEmployeeController)

.get(readAllEmployeeController)

employeeRouter
.route("/:id")


.get(readSpecificEmployeeController)
.patch(updateEmployeeController)
.delete(deleteEmployeeController)



export default employeeRouter;