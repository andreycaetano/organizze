import styles from "./styles.module.scss"
import { Footer } from "../components/Footer"
import { useState } from "react"
import { LoginSection } from "../components/HomePages/LoginSection"
import { RegisterSection } from "../components/HomePages/RegisterSection"

export const HomePage = () => {

    const [loginIsOpen, setLoginIsOpen] = useState<boolean>(false)

    return (
        <>
            <main className={styles.mainHome}>
                <section className={styles.introduction}>
                    <div>
                        <h1>Organizze</h1>
                        <h3>Organize todas as suas tarefas com facilidade e praticidade</h3>
                    </div>
                    <ul>
                        <li>Lista de Tarefas particular!</li>
                        <li>Organizada com datas em que se iniciou e com status atuais personalizaveis</li>
                        <li>Acesse sua lista de tarefas de qualquer lugar</li>
                        <li>Mantenha-se em dia com todas as suas Obrigações</li>
                    </ul>
                </section>
                {loginIsOpen ? <LoginSection setLoginIsOpen={setLoginIsOpen}/> : <RegisterSection setLoginIsOpen={setLoginIsOpen}/>}
            </main>
            <Footer/>
            
        </>
    )
}