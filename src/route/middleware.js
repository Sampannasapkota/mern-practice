import { Router } from "express";

const middleRouter= Router();

middleRouter

.route("/")
.post(
    (req,res,next)=>{
       console.log("I am middleware")
next();
    },

    (req,res,next)=>{
        console.log("I am middleware 1")
 next();
     },
     (req,res,next)=>{
        console.log("I am middleware 2")
 next();
     }
)
export default middleRouter;