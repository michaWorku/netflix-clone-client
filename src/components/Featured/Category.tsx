import { FC } from 'react'
import "./Featured.scss";
import { movieType } from "../../type";
const categories = [
    "adventure", 
    "comedy", 
    "crime", 
    "fantasy", 
    "historical", 
    "horror", 
    "romance",
    "sci-fi",
    "thriller",
    "western",
    "animation",
    "drama",
    "documentary",
]

const Category : FC<movieType> = ({ movieType }) => {
  return (
    <div className="category">
        <span>{movieType === "movie" ? "Movies" : "Series"}</span>
        <select name="genre" id="genre">
            {
                categories.map((cat, index) =>{ 
                    return( 
                    <option key={index} value={cat}>{
                        cat[0].toUpperCase() + cat.slice(1)
                    }
                    </option>
                );
            })}
        </select>
    </div>
  )
}

export default Category