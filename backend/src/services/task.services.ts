import { Task } from "../database/config.database";
import { ITaskCreate } from "../interface/user.interface";

export class TaskServices{
    static async createTask(data: ITaskCreate){
        const createdTask = await Task.create({
            ...data
        })
        const {status, id, userId, task} = createdTask.dataValues
        const taskInfos = {id, userId ,task, status}
        return taskInfos
    }

    static async getAll(userId : Number){
        const listTask = await Task.findAll({where: {userId: userId}})
        return listTask
    }
}