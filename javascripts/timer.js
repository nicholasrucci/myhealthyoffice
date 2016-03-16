'use strict';

var seconds = 60;
var canvas = document.getElementById('canvasTimer');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var minutesRadius = 180;
var secondsRadius = 155;

context.beginPath();
context.arc(centerX, centerY, minutesRadius, 0, 0.1 * Math.PI, false);
context.lineWidth = 15;
context.strokeStyle = '#ef5350';
context.stroke();
context.closePath();

context.beginPath();
context.arc(centerX, centerY, secondsRadius, 0, 2 * Math.PI, false);
context.lineWidth = 15;
context.strokeStyle = '#26a69a';
context.stroke();
context.closePath();
