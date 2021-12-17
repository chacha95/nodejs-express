const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
// static file set => url is index.html
app.use(express.static('public'));
// globally use
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// locally use
app.get('/', logger, (req, res) => {
  // res.status(200).json('welcome');
  // res.status(200).send('welcome');

  res.render('index');
});

// router 정의
const userRouter = require('./routers/users');

// router 사용=> 첫번째 parameter는 prefix
app.use('/users', userRouter);

// middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(port);
