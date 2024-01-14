import { configDotenv } from "dotenv";
import { AuthUser, User } from "../database/config.database";
import { IUser } from "../interface/user.interface";
import bcrypt, { hash } from "bcrypt"
import jwt, { VerifyErrors } from "jsonwebtoken";
const { parsed }: any = configDotenv()


export class UserServices {
    static async registerUser(data: IUser): Promise<IUser> {
        const pass = await hash(data.password as string, 7)
        const { dataValues } = await User.create({ ...data, password: pass })
        const { deletedAt, ...userData } = dataValues
        return userData
    }

    static async loginUser(username: string, password: string): Promise<IUser | null | {}> {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return null
        }

        const match = await bcrypt.compare(password, user.dataValues.password)

        if (!match) {
            return null
        }

        const findToken = await AuthUser.findOne({ where: { userId: user.dataValues.id } })
        if (!findToken) {
            const token = jwt.sign({ id: user.dataValues.id }, parsed.SECRET_KEY, {
                expiresIn: "2h"
            });
            const authUser = await AuthUser.create({
                userId: user.dataValues.id,
                token: token
            })
            return authUser
        }
        const verify = jwt.verify(findToken.dataValues.AuthToken, parsed.SECRET_KEY, async (err: VerifyErrors | null) => {
            if (err) {
                const token = jwt.sign({ userId: user.dataValues.id }, parsed.SECRET_KEY, {
                    expiresIn: "2h"
                });
                findToken.dataValues.AuthToken = token
                return await findToken.save()
            }
        })
        const token = await AuthUser.findOne({ where: { userId: user.dataValues.id } })
        return token
    }
}