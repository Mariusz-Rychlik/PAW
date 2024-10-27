const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'paws'
});
connection.connect();


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const ofertaRouter = require('./routes/oferta');
const conctactRouter = require('./routes/contact');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

app.post('/submit', (req, res) => {
    console.log(req.body);

    connection.query('INSERT INTO messages (name, last_name, email, message)' + `VALUES ("${req.body.name}","${req.body.lName}","${req.body.mail}","${req.body.mess}");`,(err,rows,fields)=>{
      if (err) throw err;
      res.redirect(302, '/');
    });


});
app.get('/api/contact-messages', (req, res) => {
  connection.query('SELECT * FROM messages',(err,rows,fields)=>{
    if (err) throw err
    let a = [];
    for(let i=0;i<rows.length;i++){
      const b = {
        name: rows[i].name,
        last_name: rows[i].last_name,
        email: rows[i].email,
        message:rows[i].message
      }
      a.push(b);
    }
    res.send(JSON.stringify(a));
  });
});
app.get('/api/contact-messages/:id', (req, res) => {
  connection.query('SELECT * FROM `messages`' + 'WHERE id ='+req.params.id,(err,rows,fields)=>{
    if (err) throw err
    let a = [];
    for(let i=0;i<rows.length;i++){
      const b = {
        name: rows[i].name,
        last_name: rows[i].last_name,
        email: rows[i].email,
        message:rows[i].message
      }
      a.push(b);
    }
    res.send(JSON.stringify(a));
  });
})
app.use('/', indexRouter);
app.use('/o-nas', usersRouter);
app.use('/oferta', ofertaRouter);
app.use('/kontakt', conctactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
