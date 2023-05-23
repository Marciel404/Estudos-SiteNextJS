import * as React from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

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
            window.removeEventListener("mousedown", mudarMenu, false)
        }
    }

}

const HeaderLogado = () => {

    React.useEffect(() => {

        const API_ENDPOINT = 'https://discord.com/api/v10'

        axios(
            {

                url: `${API_ENDPOINT}/users/@me`,
                headers: {
                    "Authorization": `Bearer ${document.cookie.slice(6)}`
                }

            }
        )
        .then(request => {

            if (request.status === 200){

                return request.data

            } else {

                return { error: request.status }

            }

        })
        .then(response => {

            document.getElementById("login").innerHTML = response.username;
            document.getElementById("loginFull").innerHTML = response.username;

        })
        .catch(err => {

            window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1018958083764002919&redirect_uri=http%3A%2F%2Flocalhost%2Fdashboard%2Fmenu&response_type=code&scope=identify%20guilds%20email";

        })
        
        if (window.location.search){
            window.location = document.URL.replace(`${window.location.search}`,'')
        }
    }
            
);

    return(
        <div>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
            </Head>
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
                        <Link href="/dashboard/menu" id="login"></Link>
                        </li>
                    </ul>
                </menu>
                <nav>
                    <Link href="/">RE=L</Link>
                    <Link href="/">Funcionalidades</Link>
                    <Link href="/">Links</Link>
                    <Link href="/">Contato</Link>
                    <Link href="/dashboard/menu" id="loginFull"></Link>
                </nav>
            </header>
        </div>
    )
  
}

export default HeaderLogado;