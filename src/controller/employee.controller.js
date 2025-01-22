import expressAsyncHandler from "express-async-handler";
import Employee from "../schema/employee.schema.js";

export const createEmployeeController = expressAsyncHandler(
    async(req,res,next)=>{
        let data= req.body;
    
        let result = await Employee.create(data);
        res.json({
            success:true,
            message: "Employee created successfully",
            result: result
        });
    
    }
);

export const readAllEmployeeController = expressAsyncHandler(
    async(req,res,next)=>{
        let result= await Employee.find({});
        res.json({
            success:true,
            message: "Employee read successfully",
            result: result,
        })
    }
);

export const readSpecificEmployeeController= expressAsyncHandler(
    async (req,res,next)=>{
        let result=await Employee.findById(req.params.id)

       res.json({
        success: true,
        message: "Employement read by ID successfully",
        result:result,
       })

    }
);

export const updateEmployeeController= expressAsyncHandler(
    async (req,res,next)=>{
        let result=await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.json({
            success: true,
            message: " Employee updated succcessfully",
            result: result

        })

    }
)

export const deleteEmployeeController = expressAsyncHandler(
    async(req,res,next)=>{

        let result=await Employee.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Employee deleted successfully"
        })

    }
)


/* 

Employee.create(req.body)
Employee.find({})
Employee.findById(req.params.id)
Employee.update(req.params.id)
Employee.findByIdAndDelete(req.params.id)
*/