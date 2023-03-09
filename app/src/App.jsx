import React, {useState, useEffect} from "react";
import "./App.css"
import Axios from 'axios'

function App(){

  const [movieName,setMovieName] = useState('')
  const [movieReview,setMovieReview] = useState('')

  const submitReview = () => {

  }
  
  return(
    <div classRevimovieReview="App">
      <h1>CRUD Application</h1>
      <div className="form">
        <input type="text" name="movieName" placeholder="Movie Name" onChange={(e)=>{
          setMovieName(e.target.value)
        }}/>
        <input type="text" name="movieReview" placeholder="Movie Review" onChange={(e)=> {
          setMovieReview(e.target.value)
        }}/>

        <button onClick={submitReview}>Inscrever-se</button>
      </div> 
    </div>
  )
}

export default App;
