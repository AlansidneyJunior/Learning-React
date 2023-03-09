import React, {useState, useEffect} from "react";
import "./App.css"
import Axios from 'axios'

function App(){

  const [movieName,setMovieName] = useState('')
  const [movieReview,setMovieReview] = useState('')
  const [movieReviewList,setmovieReviewList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setmovieReviewList(response.data)
      console.log(movieReviewList)
    })
  },[])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName,
      movieReview: movieReview
    }).then(()=>{
      alert('successful insert!')
    })
  }
  
  return(
    <div className="App">
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
      {movieReviewList.map((movieData) => {
        return <h3>{movieData.movieName} | Review: {movieData.movieReview}</h3>
      })} 
    </div>
  )
}

export default App;
