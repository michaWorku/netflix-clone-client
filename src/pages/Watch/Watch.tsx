import { FC } from 'react'
import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";

const Watch : FC = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        controls
        src="https://www.youtube.com/watch?v=820j10lEAec"
      />
    </div>
  )
}

export default Watch