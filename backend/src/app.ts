import express from 'express'
import { HandleErrors } from './errors/handleErrors.middleware'
import 'express-async-errors'
import helmet from 'helmet'
import { userRouter } from './router/user.router'
import { taskRouter } from './router/task.router'

export const app = express()

app.use(helmet())

app.use(express.json())

app.use(userRouter)

app.use("/task", taskRouter)

app.use(HandleErrors.execute)