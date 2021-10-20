const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');
const circle3 = document.querySelector('.circle-3');
const circle4 = document.querySelector('.circle-4');
const circle5 = document.querySelector('.circle-5');
const circle6 = document.querySelector('.circle-6');
const circle7 = document.querySelector('.circle-7');
const circle8 = document.querySelector('.circle-8');
const circle9 = document.querySelector('.circle-9');
const circle10 = document.querySelector('.circle-10');
const circle11 = document.querySelector('.circle-11');
const circle12 = document.querySelector('.circle-12');
const circle13 = document.querySelector('.circle-13');
const circle14 = document.querySelector('.circle-14');
const circle15 = document.querySelector('.circle-15');
const rpm = document.querySelector('.rpm');

function resetRPM() {
	circle1.style.background = '#F3F3F3';
	circle2.style.background = '#F3F3F3';
	circle3.style.background = '#F3F3F3';
	circle4.style.background = '#F3F3F3';
	circle5.style.background = '#F3F3F3';
	circle6.style.background = '#F3F3F3';
	circle7.style.background = '#F3F3F3';
	circle8.style.background = '#F3F3F3';
	circle9.style.background = '#F3F3F3';
	circle10.style.background = '#F3F3F3';
	circle11.style.background = '#F3F3F3';
	circle12.style.background = '#F3F3F3';
}

eel.expose(updateRPM);
function updateRPM(rpmValue) {
	console.log('working');
	rpm.textContent = rpmValue;

	if (rpmValue >= 5) {
		console.log(rpmValue);
		circle1.style.background = '#198C19';
		circle2.style.background = '#198C19';
	}

	if (rpmValue >= 10) {
		console.log(rpmValue);
		circle3.style.background = '#198C19';
		circle4.style.background = '#198C19';
	}

	if (rpmValue >= 15) {
		console.log(rpmValue);
		circle5.style.background = '#198C19';
		circle6.style.background = '#FF0000';
	}

	if (rpmValue >= 20) {
		console.log(rpmValue);
		circle7.style.background = '#FF0000';
		circle8.style.background = '#FF0000';
	}

	if (rpmValue >= 25) {
		console.log(rpmValue);
		circle9.style.background = '#FF0000';
		circle10.style.background = '#FF0000';
	}

	if (rpmValue >= 30) {
		console.log(rpmValue);
		resetRPM();
		circle1.style.background = '#198C19';
		circle2.style.background = '#198C19';
	}

	if (rpmValue >= 35) {
		console.log(rpmValue);
		circle3.style.background = '#198C19';
		circle4.style.background = '#198C19';
	}

	if (rpmValue >= 40) {
		console.log(rpmValue);
		circle5.style.background = '#198C19';
		circle6.style.background = '#FF0000';
	}

	if (rpmValue >= 45) {
		console.log(rpmValue);
		circle7.style.background = '#FF0000';
		circle8.style.background = '#FF0000';
	}

	if (rpmValue >= 50) {
		console.log(rpmValue);
		circle9.style.background = '#FF0000';
		circle10.style.background = '#FF0000';
	}
}
