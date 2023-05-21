import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Script from 'next/script';

function play() {
  document.getElementById("video").addEventListener('ended',myHandler,false)
  const video = document.getElementById("video")
  if ( video.style.display == "none"){
      video.style.display=""
  }
  video.play()
  function myHandler(){
      video.style.display="none"

  }
}

export default function ian(){
  return (
    <div className={styles.container}>

      <Head>
        <title>Ian</title>
      </Head>

      <Script>
        document.getElementById("video").style.display="none"
      </Script>

      <main>
        <h1>Video que define Ian</h1>
        <button onClick={play}>play</button>
      </main>

      <video id="video" preload="none" src={require("../videos/ian.mp4")}></video>
      
    </div>
  )
 }