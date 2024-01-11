import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";
import { AppError } from "../errors/appError";


interface IRequestSchemas {
   params?: AnyZodObject;
   body?: AnyZodObject;
   query?: AnyZodObject;
}

export class ValidateBody {
   static execute(schemas: IRequestSchemas) {
      return async (req: Request, res: Response, next: NextFunction) => {
         if (schemas.params) {
            req.params = await schemas.params.parseAsync(req.params);
         }

         if (schemas.body) {
            req.body = await schemas.body.parseAsync(req.body);
         }

         if (schemas.query) {
            req.query = await schemas.query.parseAsync(req.query);
         }

         next();
      };
   }
}

export class ValidateToken{
   static execute(req: Request, res: Response, next: NextFunction){
      const { parsed }: any = configDotenv()
      let token = req.headers.authorization?.replace("Bearer ", "")
      console.log(token)
      
      if(!token){
         throw new AppError(404, "Authorization token required")
      }

      jwt.verify(token, parsed.SECRET_KEY, (err: any, decoded: any) => {
         if(err) {
            throw new AppError(401, "Invalid token")
         }
         res.locals.user = decoded
         next()
      })
   }
}
