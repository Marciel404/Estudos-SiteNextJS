import { useRouter } from "next/router";
import React from "react";
import Head from 'next/head';
import play from "../scripts/videos"

export default function ian(){
    const user = useRouter().query.id
  return (
    <div>

      <Head>
        <title>?</title>
        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main>
        <div id="buttonDivPlay"></div>
        <button id="buttonPlay" onClick={play}>play</button>
        <video id="video" style={{display: "none"}} src={`/videos/${user}.mp4`}></video>
        <video id="videoerror" style={{display: "none"}} src="/videos/error.mp4"></video>
        <div id="buttonDivStop"></div>
        <div id="error404" style={{display: "none"}}>ERROR: PAGE NOT FOUND 404 </div>
      </main>

      </div>
  )
}