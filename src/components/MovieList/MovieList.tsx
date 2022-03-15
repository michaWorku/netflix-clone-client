import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { FC, useRef, useState } from "react";
import Movie from "./Movie/Movie";
import "./MovieList.scss";

const MovieList : FC = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef = useRef();

  const handleClick = (direction : string) => {
    setIsMoved(true);
    //@ts-ignore
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      //@ts-ignore
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      //@ts-ignore
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="movie-list">
      <span className="movie-list-title">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" || 'block'}}
        />
        
        <div className="container" 
        //@ts-ignore
        ref={listRef}>
          <Movie index={0} />
          <Movie index={1} />
          <Movie index={2} />
          <Movie index={3} />
          <Movie index={4} />
          <Movie index={5} />
          <Movie index={6} />
          <Movie index={7} />
          <Movie index={8} />
          <Movie index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default MovieList