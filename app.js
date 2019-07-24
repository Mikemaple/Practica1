var express = require('express');
var app = express();

//ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {  
    res.render('pages/index',{
        mensaje:"hello world!"
    });
});

app.get('/Productos', function (req, res) {  
  res.render('pages/index',{
      mensaje:"Productos"
  });
});

app.get('/Contacto', function (req, res) {  
  res.render('pages/index',{
      mensaje:"Contacto"
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
