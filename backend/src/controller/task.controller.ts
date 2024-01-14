import { Request, Response } from "express";
import { TaskServices } from "../services/task.services";

export class TaskController {
    static async createTask(req: Request, res: Response){
        const taskInfo = {
            userId: res.locals.user.id,
            task: req.body.task
        }
        const task = await TaskServices.createTask(taskInfo)
        
        return res.status(201).json(task)
    }

    static async getAll(req: Request, res: Response){
        const listTask = await TaskServices.getAll(res.locals.user.id)
        return res.status(200).json(listTask)
    }

    static async updateTask(req: Request, res: Response){
        const task = await TaskServices.updateTask(req.body.status, req.params.id)
        return res.status(200).json(task)
    }

    static async deleteTask(req: Request, res: Response){
        await TaskServices.deleteTask(req.params.id)
        return res.status(200).send()
    }
}