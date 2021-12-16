const express = require('express');
const app = express()
const port = 8000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.status(200).json('welcome');
    // res.status(200).send('welcome');
    
    res.render("index");
});

// router 정의
const userRouter = require('./routers/users');

// router 사용=> 첫번째 parameter는 prefix
app.use('/users', userRouter)

app.listen(8000)