import React from "react"

export default function checkColor() {

    try {

        React.useEffect(() => {

            const ck = document.cookie.split(";")
            let val = []
            for (var i = 0; i <= ck.length; i++) {
                if (ck[i]) {
                    if (ck[i].split("=")[0].replace(" ", "") == "darkMode") {
                        val = ck[i].split("=")
                    }
                }
            }

            if (val.length == 0) {
                document.cookie = "darkMode=false"
            } else {

                if (val[1] == "true") {
                    if (document.title == "?") {
                        document.body.style.backgroundColor = "black"
                        document.body.style.color = "white"
                    } else {

                        try {
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
                        } catch { }
                    }
                }
            }
        })

    } catch (err) {

        const ck = document.cookie.split(";")
        let val = []
        for (var i = 0; i <= ck.length; i++) {
            if (ck[i]) {
                if (ck[i].split("=")[0].replace(" ", "") == "darkMode") {
                    val = ck[i].split("=")
                }
            }
        }

        if (val.length == 0) {
            document.cookie = "darkMode=false"
        } else {

            if (val[1] == "true") {
                if (document.title == "?") {
                    document.body.style.backgroundColor = "black"
                    document.body.style.color = "white"
                } else {

                    try {
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
                    } catch { }

                }
            }
        }
    }
}
