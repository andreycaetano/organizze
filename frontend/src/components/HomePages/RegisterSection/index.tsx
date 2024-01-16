import styles from './styles.module.scss'
import React, { Dispatch, SetStateAction } from "react"

interface props{
    setLoginIsOpen: Dispatch<SetStateAction<boolean>>
}

export const RegisterSection = ({setLoginIsOpen}: props) => {
    return(
        <section className={styles.formRegister}>
                    <h2>Cadastre-se para começar a usar!</h2>
                    <form action="">
                        <label htmlFor="username">Usuario</label>
                        <input type="text" name="username" id="username" placeholder="Insira seu usuario aqui..."/>
                        <label htmlFor="pass">Senha</label>
                        <input type="password" name="pass" id="pass"  placeholder="Insira sua senha aqui..."/>
                        <label htmlFor="confirm-pass">Confirme sua Senha</label>
                        <input type="password" name="confirm-pass" id="confirm-pass" placeholder="Confirme sua senha..."/>
                        <button id={styles.buttonForm} type="submit">Cadastre-se</button>
                        <button id={styles.buttonLogin} onClick={() => {setLoginIsOpen(true)}}>Acessar minha conta!</button>                        
                    </form>
                </section>
    )
}