import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function HEADER(){
    return (
        <div >
            <header>
                <nav id="menu">
                    <ul>
                        <li><Link href="/">RE=L</Link></li>
                        <li><a href="#">Funcionalidades</a></li>
                        <li><a href="#">Links</a></li>
                        <li><a href="#">Contato</a></li>  
                    </ul>
                </nav>
                <nav id="menu2">
                    <ul>
                        <li><a href="https://discord.com/api/oauth2/authorize?client_id=1018958083764002919&redirect_uri=http%3A%2F%2F127.0.0.1%3A5000%2Fdashboard&response_type=code&scope=identify%20guilds%20email">LOGIN</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}