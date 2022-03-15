import { FC } from 'react'
import "./Featured.scss";
import { movieType } from "../../type";
import  Category  from './Category'

import Info from './Info';

const Featured : FC<movieType> = ({ movieType }) => {
  
    return (
        <div className="featured">
          {movieType && (
            <Category movieType={movieType}/>
          )}
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <Info />
        </div>
      );
}

export default Featured
