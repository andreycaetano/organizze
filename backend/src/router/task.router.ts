import { Router } from "express";
import { ValidateToken } from "../middleware/validate.middleware";
import { TaskController } from "../controller/task.controller";

export const taskRouter = Router()

taskRouter.post("/create", ValidateToken.execute, TaskController.createTask)

taskRouter.get("/", ValidateToken.execute, TaskController.getAll)