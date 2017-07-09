var app = require('express')();
var http = require('http').Server(app);


app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});


http.listen(process.env.PORT, function(){
  console.log('listening on *:process.env.PORT');
})


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    