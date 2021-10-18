import React from 'react'
import Form from "../components/Form"

const youtubeDeck = () => {
  const streamUrl = ""
  return (
    <div>
      <Form />
      <iframe
        width="480"
        height="270"
        src={
          "https://www.youtube.com/embed/" +
          streamUrl.split("=")[1]
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default youtubeDeck
