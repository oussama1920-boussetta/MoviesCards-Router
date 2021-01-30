import  React  from "react";
// import {CardInfo} from './CardInfo'
import {RunCrd} from './MovieCard/MovieCard'
import  Add  from "./Add/Add";

function Main ({movies, setMovies,AddNewMovie})  {
    return(
        <div className='Cardo'>
        
        {movies.map((el, i)=><RunCrd movie={el} key={i} />)}
        <Add setMovies={setMovies} AddNewMovie={AddNewMovie} />
        </div>

    )
    
}
export default Main 