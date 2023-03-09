const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '854254',
    database: 'db_crud'
})

app.get('/',(req,res) => {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('supernatural','Muito bom com final MEH!')"
    db.query(sqlInsert,(err,result) => {
        res.send('Inseriu?')
        console.log('Inseriu?')
    })
})
app.listen(3001, () => {
    console.log("Running Server in port 3001")
})