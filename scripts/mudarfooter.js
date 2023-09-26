import React from "react"

export default function mudarFooter() {

    try {

        React.useEffect(() => {

            setInterval(() => {
                let f = document.getElementById("footerMudando")
                const frases = [
                    "Transformando sonhos em realidade", 
                    "Automatizando seu servidor",
                    "Função de Ticket",
                    "Função de registro",
                    "Economia"
                ]
                f.innerHTML = frases[Math.floor(Math.random() * frases.length)]
            }, 10000)

        })

    } catch (e) {
    }

}