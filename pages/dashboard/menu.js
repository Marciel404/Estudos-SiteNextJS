import * as React from "react";
import axios from "axios";
import HeaderLogado from "../../components/headerLogado";
import configData from "../../configData.json"
import FOOTER from "../../components/footer"

function getLogin(){
    React.useEffect(() => {

        const API_ENDPOINT = 'https://discord.com/api/v10'
        const CLIENT_ID = '1018958083764002919'
        const CLIENT_SECRET = configData.CLIENT_SECRET
        const REDIRECT_URI = 'https://marciel404.squareweb.app/dashboard/menu'

        
        if (!document.cookie){

            axios(
                {

                    url: `${API_ENDPOINT}/oauth2/token`,
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: {
                        'client_id': CLIENT_ID,
                        'client_secret': CLIENT_SECRET,
                        'grant_type': 'authorization_code',
                        'code': window.location.search.slice(6),
                        'redirect_uri': REDIRECT_URI
                    }
                }
            )
            .then(request => {
                console.log(request.data)
                if (request.status === 200){

                    return request.data

                } else {

                    return { error: request.status }

                }

            })
            .then(response => {
                document.cookie = `RELOG=${response.access_token}; expire=${response.expires_in}; path=./dashboard/menu`
            })
            .catch(err => {
            })
        }
    }
            
);
}


const dashboard = () => {

    return(
        <div onLoad={getLogin()}>
            <main>
                <HeaderLogado></HeaderLogado>
                <FOOTER></FOOTER>
            </main>
        </div>
    )
  
}

export default dashboard;