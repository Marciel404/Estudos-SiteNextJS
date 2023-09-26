export default function changeMode() {

    
    if (window.getComputedStyle(document.body).backgroundColor == "rgb(255, 255, 255)") {

        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"

        document.cookie = "darkMode=true"

        let Mc = document.getElementById("modo_escuro")
        Mc.id = "modo_claro"
        Mc.innerText = "light_mode"
        Mc.style.display = "flex"
        let Mc2 = document.getElementById("modo_escuro_mobile")
        Mc2.id = "modo_claro_mobile"
        Mc2.innerText = "light_mode"

    } else {

        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"

        document.cookie = "darkMode=false"

        let Mc = document.getElementById("modo_claro")
        Mc.id = "modo_escuro"
        Mc.innerText = "dark_mode"
        Mc.style.display = "flex"
        let Mc2 = document.getElementById("modo_claro_mobile")
        Mc2.id = "modo_escuro_mobile"
        Mc2.innerText = "dark_mode"

    }
}