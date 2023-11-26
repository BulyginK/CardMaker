import css from "./Header.module.css"
import logoImg from "../../image/logo.png"

function Header() {
    return (
        <div className={css.wrapper}>
            <img className={css.logoImg} src={logoImg} alt="logo" />
            <h3 className={css.logo}>
                Card Maker
            </h3>
        </div>
    );
}

export default Header