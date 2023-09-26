import mudarFooter from "../scripts/mudarfooter";

export default function FOOTER() {

    return (

        <div onLoad={mudarFooter()}>
            <footer>
                ©Todos os direitos reservados a Marciel404
                <p id="footerMudando">Transformando sonhos em realidade</p>
            </footer>
            
        </div>
    )
}