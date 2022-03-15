import { FC } from 'react'
import "./Featured.scss";
import Button from './Button';

const Info : FC = () => {
  return (
    <div className="info">
    <img
        src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
        alt=""
    />
    <span className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        adipisci repellendus eum quasi illo, velit numquam, maxime tempora
        sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
        temporibus eum earum?
    </span>
    <Button/>
    </div>
  )
}

export default Info