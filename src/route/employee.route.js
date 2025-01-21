import { Router } from "express";

let employeeRouter= Router()

employeeRouter
.route("/")
.post((req,res,next)=>{
    console.log("Employee created Successfully")


})

.get((req,res,next)=>{
    console.log("Employee read successfully")

})

export default employeeRouter;