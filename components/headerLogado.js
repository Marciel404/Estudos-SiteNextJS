import * as React from "react";
import Link from "next/link";
import clickMenu from "../scripts/clickMenu"
import changeMode from "../scripts/changeMode"
import checkColor from "../scripts/checkColor"
import configData from "../configData.json"
import axios from "axios";

export default function HeaderLogado(){
    React.useEffect(() => {

        const API_ENDPOINT = 'https://discord.com/api/v10'
        const CLIENT_ID = '1018958083764002919'
        const CLIENT_SECRET = configData["CLIENT_SECRET"]
        const REDIRECT_URI = configData["linkRedirectAuth"]

        const ck = document.cookie.split(";")

        console.log(ck)
        let val1 = []
        for (var i = 0; i <= ck.length; i ++){
            if (ck[i]){
                if (ck[i].split("=")[0].replace(" ", "") == "RELOG"){
                    val1 = ck[i].split("=")
                }
            }
        }

        if ( val1.length < 1 ){

            var codeval = document.URL.split("=")[1]

            axios(
                {

                    url: `${API_ENDPOINT}/oauth2/token`,
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: {
                        'client_id': CLIENT_ID,
                        'client_secret': CLIENT_SECRET,
                        'grant_type': 'authorization_code',
                        'code': codeval,
                        'redirect_uri': REDIRECT_URI
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
                document.cookie = `RELOG=${response.access_token}`
            })
            .catch(err => {
            })
        }

        if ( window.location.search ){
            window.location = document.URL.replace(window.location.search, "")
        }

        const ck2 = document.cookie.split(";")
        let val2 = []
        for (var i = 0; i <= ck.length; i ++){
            if (ck2[i]){
                if (ck2[i].split("=")[0].replace(" ", "") == "RELOG"){
                    val2 = ck2[i].split("=")
                }
            }
        }

        axios(
            {
                method: "GET",
                url: `${API_ENDPOINT}/users/@me`,
                headers: {
                    "Authorization": `Bearer ${val2[1]}`
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

            // window.location.href = configData["linkRedirectDiscord"];

        })
        checkColor()
    })
    return(
        <div>
            <header onLoad={checkColor()}>
                <h1 className="NameRE">RE=L</h1>
                <i id="burguer" className="material-symbols-outlined" onClick={clickMenu}>menu</i>
                <i id="modo_escuro_mobile" className="material-symbols-outlined" onClick={changeMode}>dark_mode</i>
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
                            <Link href="/dashboard" id="login"></Link>
                        </li>
                    </ul>
                </menu>
                <nav>
                    <Link href="/">RE=L</Link>
                    <Link href="/">Funcionalidades</Link>
                    <Link href="/">Links</Link>
                    <Link href="/">Contato</Link>
                    <Link href="/dashboard" id="loginFull"></Link>
                    <i id="modo_escuro" className="material-symbols-outlined" onClick={changeMode}>dark_mode</i>
                </nav>
            </header>
        </div>
    )
};