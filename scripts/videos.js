function play(){

  document.getElementById("video").addEventListener('ended',myHandler,false)
  document.getElementById("videoerror").addEventListener('ended',myHandler,false)
  const video = document.getElementById("video")
  const videoerror = document.getElementById("videoerror")
  const button2 = document.getElementById("buttonDivStop")

  document.getElementById("buttonPlay").remove()

  video.play()

  document.title = window.location.pathname.slice(1)

  if ( video.style.display == "none" && !video.paused ){
    video.style.display=""
  }

  if ( video.paused ) {
    if ( videoerror.style.display == "none"){
      video.style.display == "none"
      videoerror.style.display=""
    }
    document.title = "error"
    document.getElementById("error404").style.display=""
    videoerror.play()
  }

  video.style.width = "50%"

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
  const videoerror = document.getElementById("videoerror")
  const buttonStop = document.getElementById("buttonStop")
  const button2 = document.getElementById("buttonDivPlay")

  if ( video.style.display == "none" && video.paused ){
    videoerror.pause()
    videoerror.currentTime = 0
    videoerror.style.display="none"
    document.getElementById("error404").style.display="none"
  } else {
    video.pause()
    video.currentTime = 0
    video.style.display="none"
  }

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

export default play;