// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var os = require('os-utils');

var five = require("johnny-five"),
  board,led;

const Board = require("firmata");
board = new five.Board();
var animationData;
var slider_value;
var timeouts = [];
var done = false;
var interval

app.use(express.static(__dirname + '/bower_components'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

server.listen(4200);  

io.on('connection', function(client) {  
    console.log('Łączenie z klientem...');

    client.on('join', function(data) {
        console.log(data);
    });

});

function change([
    a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16,
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16,
    b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16,
    d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16
  ]) {
  return [
    `${a1}${a2}${a3}${a4}${b1}${b2}${b3}${b4}`,
    `${a5}${a6}${a7}${a8}${b5}${b6}${b7}${b8}`,
    `${a9}${a10}${a11}${a12}${b9}${b10}${b11}${b12}`,
    `${a13}${a14}${a15}${a16}${b13}${b14}${b15}${b16}`,
    `${c1}${c2}${c3}${c4}${d1}${d2}${d3}${d4}`,
    `${c5}${c6}${c7}${c8}${d5}${d6}${d7}${d8}`,
    `${c9}${c10}${c11}${c12}${d9}${d10}${d11}${d12}`,
    `${c13}${c14}${c15}${c16}${d13}${d14}${d15}${d16}`
  ];
}

function createMatrix() {
  const matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    },
    devices: 1
  });

  return matrix;
}

io.sockets.on('connection', function (socket) {

  socket.on('getData', function (data) {
    animationData = data;
  });

  socket.on('CPU', function (data) {
    done = false
    var matrix = createMatrix();
    slider_value = data;

    interval = setInterval(() => { os.cpuUsage(function(v){

      var leds_on = Math.round(v*64, 0);

      console.log(leds_on);
      console.log( 'CPU Usage (%): ' + v*100 );

      var arr=[];

      for(var j = 1; j <= 64; j++) {
        if(leds_on < j) {
            arr.push(0);
        } else {
            arr.push(1);
        }
      }

      if(!done) {
        socket.emit('CPUmonitor', v);
        matrix.draw(change(arr));
      }

      arr=[];
      
    }); },slider_value );
  });

  socket.on('stop', function (data) {
    var matrix = createMatrix();
    clearInterval(interval); 
    done = true;

    for(var i = 0 ; i < timeouts.length ; i++ ) {
      clearTimeout(timeouts[i]);
    }
    timeouts = [];

    slider_value+=slider_value;

    setTimeout(() => matrix.draw(change(new Array(64).fill(0))), slider_value);
  });

  socket.on('led', function (data) {  
    var matrix = createMatrix();
      
    for (let i = 0; i <= animationData.animation.length-1; i++) {
      if (i!=0) {
        animationData.time[i]= animationData.time[i] + animationData.time[i-1] +41;
      } else {
        animationData.time[i] = 100;
      }

      timeouts.push(setTimeout(() => matrix.draw(change(animationData.animation[i])) , animationData.time[i] ));
    }
  });
});