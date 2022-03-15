import { FC } from 'react'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";

const Button: FC= () => {
  return (
    <div className="buttons">
        <button className="play">
            <PlayArrow />
            <span>Play</span>
        </button>
        <button className="more">
            <InfoOutlined />
            <span>Info</span>
        </button>
    </div>
  )
}

export default Button