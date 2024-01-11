import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { UserMiddleware } from "../middleware/user.middleware";
import { ValidateBody } from "../middleware/validate.middleware";
import { registerSchemas } from "../schemas/user.schemas";

export const userRouter = Router()

userRouter.post("/register", ValidateBody.execute({body: registerSchemas}),UserMiddleware.validadeNewUser ,UserController.registerUser)

userRouter.post("/login", UserController.login)