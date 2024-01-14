import { Request, Response } from "express";
import { UserServices } from "../services/user.services";
import { AppError } from "../errors/appError";

export class UserController{
    static async registerUser(req: Request, res: Response) {
        const user = await UserServices.registerUser(req.body)
        return res.status(201).json(user)
    }

    static async login(req: Request, res: Response) {
       const token = await UserServices.loginUser(req.body.username, req.body.password)
       if(!token){
        throw new AppError(401, "Authentication error")
       }
       return res.status(200).json(token)
    }
}