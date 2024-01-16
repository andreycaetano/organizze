import { Dispatch, SetStateAction } from "react"
import styles from './styles.module.scss'

interface props{
    setLoginIsOpen: Dispatch<SetStateAction<boolean>>
}

export const LoginSection = ({setLoginIsOpen} : props) => {
    return (
        <section className={styles.loginSection}>
            <h3>Faça seu login!</h3>
            <form action="">
                <label htmlFor="">Usuario</label>
                <input type="text" placeholder="Digite seu Usuario aqui"/>
                <label htmlFor="pass">Senha</label>
                <input type="password" name="pass" id="pass" placeholder="Digite sua senha aqui"/>
                <button id={styles.buttonLogin} type="submit">Acessar</button>
                <span>Ou</span>
                <button id={styles.buttonRegister} onClick={() => setLoginIsOpen(false)}>Cadastre-se</button>
            </form>
        </section>
    )
}