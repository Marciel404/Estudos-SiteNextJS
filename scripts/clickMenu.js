export default function clickMenu() {

    const MenuStyle = document.getElementById("MenuBurguer")

    if (MenuStyle.style.display == "" || MenuStyle.style.display == "none") {
        MenuStyle.style.display = "block"
    } else {
        MenuStyle.style.display = "none"
    }

    window.addEventListener("resize", mudarMenu, false);

    function mudarMenu() {
        if (window.innerWidth > 700) {
            document.getElementById("MenuBurguer").style.display = "none"
            window.removeEventListener("resize", mudarMenu, false)
        }
    }
}