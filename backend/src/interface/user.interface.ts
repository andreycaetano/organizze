export interface IUser {
    username: String,
    password: String
}

export interface IToken{
    AuthToken: string
}

export interface ITaskCreate {
    task: String
    userId: Number
}
  