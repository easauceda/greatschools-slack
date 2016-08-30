var express = require('express');
var app = express();

var PORT = process.env.PORT || '3000';

app.get('/api/school', function(req, res){
  res.send('This is school information!');
});

app.listen(PORT, function(err){
  if (err) throw err;
  console.log('Listening on port ' + PORT);
});
