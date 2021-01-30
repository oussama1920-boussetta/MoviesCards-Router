import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../src/Nav/Nav";
import Main from './Main'
import React, { useState } from "react";
import { CardInfo } from './CardInfo';
import { Input } from './Input';
import {BrowserRouter,Route} from 'react-router-dom'
import  Trailer  from "./Trailer";


function App() {
  const [myRate, setMyRate] = useState(0);
  const [myInput, setMyInput] = useState("");
  const [movies, setMovies] = useState(CardInfo);

  const AddNewMovie = (x) => { setMovies([...movies, x]) }
  return (

    <BrowserRouter>


    <div className="App">
      <div>

        <NavBar myRate={myRate} setMyRate={setMyRate} > </NavBar>
      </div>



      <div>
        <Input setMyInput={setMyInput} />

      </div>
      
          <div >
      
         <Route exact path="/" render={()=> ( <Main    
           movies={movies.filter(
            (el) =>
              el.titre.toLowerCase().includes(myInput.toLowerCase().trim()) && el.rating >= myRate)} AddNewMovie={AddNewMovie}
            setMovies={setMovies} />)}/>
              <Route  path='/Trailer/:id' render={(props)=>(<Trailer {...props} cardinfo={CardInfo} />)} />
      </div>

      
  



    </div>
    </BrowserRouter>

  );
}


export default App;
