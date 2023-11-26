import css from "./Header.module.css"
import logoImg from "../../image/logo.png"

function Header() {
    function saveJsonObjToFile() {
        const saveObj = { "a": 3 }; // tmp

        // file setting
        const text = JSON.stringify(saveObj);
        const name = "sample.json";
        const type = "text/plain";

        // create file
        const a = document.createElement("a");
        const file = new Blob([text], { type: type });
        a.href = URL.createObjectURL(file);
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    return (
        <div className={css.wrapper}>
            <img className={css.logoImg} src={logoImg} alt="logo" />
            <h3 className={css.logo}>
                Card Maker
            </h3>
            <button onClick={saveJsonObjToFile}>Экспорт</button>
        </div>
    );
}

export default Header