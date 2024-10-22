window.onload = function() {
  taisnsturis();
}

function taisnsturis() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.lineWidth = 15;
  ctx.strokeStyle = 'blue';
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.stroke();
}

function aplis() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(150, 250, 50, 0, 2 * Math.PI);
  ctx.lineWidth = 8;
  ctx.strokeStyle = 'red';
  ctx.fillStyle = 'yellow';
  ctx.stroke();
  ctx.fill();
}

function teksts() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.font = "8px Sofia";
  ctx.fillStyle = "green";
  ctx.fillText("Sveika pasaule!", 450, 50);
}

function linija() {
  var c = document.getElementById("zimejums");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(500, 400);
  ctx.lineWidth = 14;
  ctx.strokeStyle = 'orange';
  ctx.stroke();
}