import Logo from "../../../assets/logoOrganizze.svg"

export const Header = () => {
    return (
        <header>
            <figure>
                <img src={Logo} alt="Organizze" />
            </figure>
            <div>
                <div className="infoUser">
                    <span className="initialAlph">

                    </span>
                    <span className="username">

                    </span>
                </div>
                <button className="exit">
                    Sair
                </button>
            </div>
        </header>
    )
}