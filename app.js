let second = 0;
let cron;
let fontTypesDefault = ["SERIF","SANS SERIF","DISPLAY","HANDWRITING"];

document.getElementById('btAgain').addEventListener('click', function() {		

	//Define Font
	document.getElementById('fontType').innerHTML = getFontType();

	//Reset Timer
	clearInterval(cron);
	second = 10;
	document.getElementById('second').innerHTML = 10;

	//Start Timer
	cron = setInterval(function() {
		
		second--;			
		if(second < 0){
			clearInterval(cron);
		}else{
			document.getElementById('second').innerHTML = parseInt(second).toFixed(0) > 9 ? parseInt(second).toFixed(0) : '0' + parseInt(second).toFixed(0);
		}			
	}, 1000);	
});

let getFontType = () => {
	let lastOption = document.getElementById('fontType').textContent;
	let fontTypes = fontTypesDefault.filter( fontType => fontType != lastOption );
	return fontTypes[Math.floor(Math.random()*fontTypes.length)];
}