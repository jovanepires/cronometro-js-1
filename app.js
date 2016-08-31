var time = 0;
var cron;

document.getElementById('start').addEventListener('click', function() {
	document.getElementById('start').disabled = true;
	document.getElementById('clear').disabled = true;
	cron = setInterval(function() {
		time++;
  		document.getElementById("timer").innerHTML = parseInt(time).toFixed(0);
	}, 1000);
});

document.getElementById('stop').addEventListener('click', function(){
	clearInterval(cron);
		document.getElementById('start').disabled = false;
		document.getElementById('clear').disabled = false;
});

document.getElementById('clear').addEventListener('click', function(){
	time = 0;
		document.getElementById("timer").innerHTML = 0;
});