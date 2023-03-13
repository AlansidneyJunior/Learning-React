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
  },[movieReviewList])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName,
      movieReview: movieReview
    }).then(()=>{
      setmovieReviewList([...movieReviewList,{movieName: movieName, movieReview: movieReview}])
    })
  }
  
  const handleDeleteCard = (movieName) => {
    Axios.delete(`http://localhost:3001/api/delete/${movieName}`)
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
        return (
          <div className="card-container">
            <div className="movie-item">
              <div className="movie-title">{movieData.movieName}</div>
              <div className="movie-review">{movieData.movieReview}</div>
            </div>
            <div className="update-item">
              <button onClick={() => {handleDeleteCard(movieData.movieName)}}>Delete Card</button>
              <input type="text" placeholder="Update Review"/>
              <button>Update review</button>
            </div>
          </div>
        )
      })} 
    </div>
  )
}

export default App;
