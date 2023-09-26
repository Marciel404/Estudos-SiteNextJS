import Link from "next/link"
import clickMenu from "../scripts/clickMenu"
import configData from "../configData.json"
import changeMode from "../scripts/changeMode"
import checkColor from "../scripts/checkColor"

export default function HEADER(){
    return (
        <div>
            <header>
                <h1 className="NameRE">RE=L</h1>
                <i id="burguer" className="material-symbols-outlined" onClick={clickMenu}>menu</i>
                <i id="modo_escuro_mobile" className="material-symbols-outlined" onClick={changeMode}>dark_mode</i>
                <menu id="MenuBurguer">
                    <ul>
                        <li>
                            <Link href="/">RE=L</Link>
                        </li>
                        <li>
                            <Link href="/Funcionalidades">Funcionalidades</Link>
                        </li>
                        <li>
                            <Link href="/Links">Links</Link>
                        </li>
                        <li>
                            <Link href="/Contatos">Contato</Link>
                        </li>
                        <li>
                            <a id="login" href={configData["linkRedirectDiscord"]}>LOGIN</a>
                        </li>
                    </ul>
                </menu>
                <nav>
                    <Link href="/">RE=L</Link>
                    <Link href="/Funcionalidades">Funcionalidades</Link>
                    <Link href="/Links">Links</Link>
                    <Link href="/Contato">Contato</Link>
                    <a id="login" href={configData["linkRedirectDiscord"]}>LOGIN</a>
                    <i id="modo_escuro" className="material-symbols-outlined" onClick={changeMode}>dark_mode</i>
                </nav>
            </header>
        </div>
    )
}