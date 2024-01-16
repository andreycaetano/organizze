import Logo from '../../assets/logoOrganizze.svg'
import styles from '../Footer/styles.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
                <div>
                    <figure>
                        <img src={Logo} alt="Organizze"/>
                    </figure>
                    <span>
                        © Copyright 2024
                    </span>
                </div>
            </footer>
    )
}