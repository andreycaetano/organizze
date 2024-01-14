import { app } from "./app";
import { configDotenv } from "dotenv";
import { sequelize } from "./database/config.database";
const { parsed }: any = configDotenv()

app.listen(process.env.PORT, () => {
    try {
        sequelize.authenticate().then(() => console.log("Banco de dados conectado"))
        sequelize.sync({ alter: true }).then(() => console.log("Modelos Sincronizados"))
        console.log(`API iniciada na porta ${parsed.PORT}`)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})