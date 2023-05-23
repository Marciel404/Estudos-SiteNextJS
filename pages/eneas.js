import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Script from 'next/script';

function play(){

  document.getElementById("video").addEventListener('ended',myHandler,false)
  const video = document.getElementById("video")
  const button2 = document.getElementById("buttonDivStop")

  document.getElementById("buttonPlay").remove()

  if ( video.style.display == "none"){
    video.style.display=""
  }

  video.style.width = "100%"
  video.style.height = "100%"
  video.play()

  const b2 = document.createElement("button")
  b2.onclick = stop
  b2.id = "buttonStop"

  if (!document.getElementById("buttonStop")){
    b2.appendChild(document.createTextNode("stop"))
    button2.appendChild(b2)
  }

  function myHandler(){
    stop()
  }
}

function stop(){

  const video = document.getElementById("video")
  const buttonStop = document.getElementById("buttonStop")
  const button2 = document.getElementById("buttonDivPlay")

  video.pause()
  video.currentTime = 0
  video.style.display="none"

  if (buttonStop != null){
    buttonStop.remove()
  }

  const b2 = document.createElement("button")
  b2.onclick = play
  b2.id = "buttonPlay"
  b2.appendChild(document.createTextNode("play"))
  if (!document.getElementById("buttonPlay")){
    button2.appendChild(b2)
  }

}

export default function eneas(){
  return (
    <div className={styles.container}>

      <Head>
        <title>Enéas</title>
        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Script>
        document.getElementById("video").style.display="none"
      </Script>

      <main>
        <h1>Video que define Enéas</h1>
        <div id="buttonDivPlay"></div>
        <button id="buttonPlay" onClick={play}>play</button>
        <video id="video" src={require("../public/videos/eneas.mp4")}></video>
        <div id="buttonDivStop"></div>
      </main>

      </div>
  )
 }