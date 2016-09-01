var minute = 0;
var second = 0;
var millisecond = 0;
var cron;

document.getElementById('start').addEventListener('click', function() {
	document.getElementById('start').disabled = true;
	document.getElementById('reload').disabled = true;
	cron = setInterval(function() {
		millisecond++;

		if (millisecond > 9) {
			second++;
			document.getElementById('second').innerHTML = parseInt(second).toFixed(0) > 9 ? parseInt(second).toFixed(0) : '0' + parseInt(second).toFixed(0);
			millisecond = 0;
		}

		if (second > 59) {
			minute++;
			document.getElementById('minute').innerHTML = parseInt(minute).toFixed(0) > 9 ? parseInt(minute).toFixed(0) : '0' + parseInt(minute).toFixed(0);
			second = 0;
		}

  		document.getElementById('millisecond').innerHTML = parseInt(millisecond).toFixed(0);

	}, 100);
});

document.getElementById('pause').addEventListener('click', function(){
	clearInterval(cron);
	document.getElementById('start').disabled = false;
	document.getElementById('reload').disabled = false;
});

document.getElementById('reload').addEventListener('click', function(){
	minute = 0;
	second = 0;
	document.getElementById('millisecond').innerHTML = '0';
	document.getElementById('second').innerHTML = '00';
	document.getElementById('minute').innerHTML = '00';
});