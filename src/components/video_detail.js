import React from 'react'

const VideoDetail = ({video}) => {
  const videoId = video.id.videoID
  const url = `https://www.youtube.com/embed/${videoId}`
  if(!video){
    return <div>loading...</div>
  }
  return (
    <div>
    <iframe src={url}></iframe>
    <div>{video.snippet.title}</div>
    <div>{video.snippet.description}</div>
    </div>
  )
}
