import Head from "next/head"
import Link from "next/link"

function clickMenu(){

    const MenuStyle = document.getElementById("MenuBurguer")

    if ( MenuStyle.style.display == "" || MenuStyle.style.display == "none"){
        MenuStyle.style.display = "block"
        MenuStyle.classList.add("open")
    } else {
        MenuStyle.style.display = "none"
        MenuStyle.classList.remove("open")
    }

    const w=window.addEventListener("resize", mudarMenu, false);

    function mudarMenu(){
        if ( window.innerWidth > 700){
            document.getElementById("MenuBurguer").style.display = "none"
            window.removeEventListener("resize", mudarMenu, false)
        }
    }

}

export default function HEADER(){
    return (
        <div >

            <header>
                
                <h1 className="NameRE">RE=L</h1>
                <i id="burguer" className="material-symbols-outlined" onClick={clickMenu}>menu</i>
                <menu id="MenuBurguer">
                    <ul>
                        <li>
                            <Link href="/">RE=L</Link>
                        </li>
                        <li>
                            <Link href="/">Funcionalidades</Link>
                        </li>
                        <li>
                            <Link href="/">Links</Link>
                        </li>
                        <li>
                            <Link href="/">Contato</Link>
                        </li>
                        <li>
                        <a id="login" href="https://discord.com/api/oauth2/authorize?client_id=1018958083764002919&redirect_uri=https%3A%2F%2Fmarciel404.squareweb.app%2Fdashboard%2Fmenu&response_type=code&scope=identify%20guilds%20email">LOGIN</a>
                        </li>
                    </ul>
                </menu>
                <nav>
                    <Link href="/">RE=L</Link>
                    <Link href="/">Funcionalidades</Link>
                    <Link href="/">Links</Link>
                    <Link href="/">Contato</Link>
                    <a id="login" href="https://discord.com/api/oauth2/authorize?client_id=1018958083764002919&redirect_uri=https%3A%2F%2Fmarciel404.squareweb.app%2Fdashboard%2Fmenu&response_type=code&scope=identify%20guilds%20email">LOGIN</a>
                </nav>
            </header>
        </div>
    )
}