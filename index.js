var express = require('express');
var app = express();

var PORT = process.env.PORT || '3000';

app.get('/api/school', function(req, res){
  var payload = {
    'response_type': 'in_channel',
    'text': 'Here are some schools in that area'
  };
  res.json(payload);
});

app.listen(PORT, function(err){
  if (err) throw err;
  console.log('Listening on port ' + PORT);
});
