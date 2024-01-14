import { Identifier } from "sequelize";
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

    static async updateTask(status: String, id: Identifier) {
        const task = await Task.findByPk(id)
        task?.update({status : status})
        return task
    }

    static async deleteTask(id: Identifier){
        const task = await Task.findByPk(id)
        task?.destroy()
    }
}