import { NextFunction, Request, Response } from "express";
import { User } from "../database/config.database";
import { AppError } from "../errors/appError";
import { IToken } from "../interface/user.interface";
import jwp from "jsonwebtoken"
import { configDotenv } from "dotenv";
const { parsed }: any =configDotenv()

export class UserMiddleware{
    static async validadeNewUser(req: Request, res: Response, next: NextFunction){
        const findUser = await User.findOne({where: {username: req.body.username}})
        if (!findUser) {
            next()
        } else {
            throw new AppError(409, "Already registered user.")
        }
    }
}