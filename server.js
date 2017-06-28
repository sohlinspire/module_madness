var http = require('http');
var mThree = require('./modules/moduleThree.js');
//console.log(tracker);
var server = http.createServer(function(request, response){
var number = mThree.value3(100,1000000);
  response.write('Acount balance: \n' + '$' + number);
  response.end();
});
server.listen(3000);
console.log('listening on port 3000');
