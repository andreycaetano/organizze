import { DataTypes, Model, Sequelize, where } from "sequelize";
import { configDotenv } from "dotenv";

const { parsed }: any = configDotenv()
const {DATABASE_DB, USERNAME_DB, PASS_DB, HOST_DB, DIALECT_DB} = parsed 

export const sequelize = new Sequelize(DATABASE_DB, USERNAME_DB, PASS_DB, {
  host: HOST_DB,
  dialect: DIALECT_DB,
  define: {
    freezeTableName: true
  }
})

export class Task extends Model { }
export class User extends Model { }
export class AuthUser extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
})


Task.init({
  task: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(50),
    defaultValue: "Pendente",
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Task',
  tableName: 'tasks',
  timestamps: true,
})

Task.belongsTo(User, {
  foreignKey: "userId",
  onUpdate: "RESTRICT",
  onDelete: "RESTRICT"
})

AuthUser.init({
  token: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'AuthUser',
  tableName: 'auth_user',
  timestamps: false,
})

AuthUser.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
})