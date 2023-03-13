const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '854254',
    database: 'db_crud'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/get', (req,res)=>{
    const sqlSelect = 'SELECT * FROM movie_reviews'
    db.query(sqlSelect, (err,result)=>{
        res.send(result)
    })
})

app.get('/api/delete/:movieName', (req,res)=> {
    const name = req.params.movieName
    sqlDelete = 'DELETE FROM movie_reviews WHERE movieName = ?'

    db.query(sqlDelete, name,(err,result) =>{
        res.send(result)
    })
})
app.post('/api/insert', (req,res) => {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = 'INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)'
    db.query(sqlInsert, [movieName,movieReview], (err,result) => {
        console.log(result)
    })
})


app.listen(3001, () => {
    console.log("Running Server in port 3001")
})