const circle1 = document.querySelector('.circle-1'); // #198C19
const circle2 = document.querySelector('.circle-2'); // #198C19
const circle3 = document.querySelector('.circle-3'); // #198C19
const circle4 = document.querySelector('.circle-4'); // #198C19
const circle5 = document.querySelector('.circle-5'); // #198C19
const circle6 = document.querySelector('.circle-6'); // FF0000
const circle7 = document.querySelector('.circle-7'); // FF0000
const circle8 = document.querySelector('.circle-8'); // FF0000
const circle9 = document.querySelector('.circle-9'); // FF0000
const circle10 = document.querySelector('.circle-10'); // FF0000
const circle11 = document.querySelector('.circle-11'); // 0000FF
const circle12 = document.querySelector('.circle-12'); // 0000FF
const circle13 = document.querySelector('.circle-13'); // 0000FF
const circle14 = document.querySelector('.circle-14'); // 0000FF
const circle15 = document.querySelector('.circle-15'); // 0000FF
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

function resetNextRPMBars(currentRPMCircle) {
	if (currentRPMCircle === 1) {
		circle2.style.background = '#e5e5e5';
		circle3.style.background = '#e5e5e5';
		circle4.style.background = '#e5e5e5';
		circle5.style.background = '#e5e5e5';
		circle6.style.background = '#e5e5e5';
		circle7.style.background = '#e5e5e5';
		circle8.style.background = '#e5e5e5';
		circle9.style.background = '#e5e5e5';
		circle10.style.background = '#e5e5e5';
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 2) {
		circle3.style.background = '#e5e5e5';
		circle4.style.background = '#e5e5e5';
		circle5.style.background = '#e5e5e5';
		circle6.style.background = '#e5e5e5';
		circle7.style.background = '#e5e5e5';
		circle8.style.background = '#e5e5e5';
		circle9.style.background = '#e5e5e5';
		circle10.style.background = '#e5e5e5';
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 3) {
		circle4.style.background = '#e5e5e5';
		circle5.style.background = '#e5e5e5';
		circle6.style.background = '#e5e5e5';
		circle7.style.background = '#e5e5e5';
		circle8.style.background = '#e5e5e5';
		circle9.style.background = '#e5e5e5';
		circle10.style.background = '#e5e5e5';
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 4) {
		circle5.style.background = '#e5e5e5';
		circle6.style.background = '#e5e5e5';
		circle7.style.background = '#e5e5e5';
		circle8.style.background = '#e5e5e5';
		circle9.style.background = '#e5e5e5';
		circle10.style.background = '#e5e5e5';
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 5) {
		circle6.style.background = '#e5e5e5';
		circle7.style.background = '#e5e5e5';
		circle8.style.background = '#e5e5e5';
		circle9.style.background = '#e5e5e5';
		circle10.style.background = '#e5e5e5';
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 6) {
		circle7.style.background = '#e5e5e5';
		circle8.style.background = '#e5e5e5';
		circle9.style.background = '#e5e5e5';
		circle10.style.background = '#e5e5e5';
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 7) {
		circle8.style.background = '#e5e5e5';
		circle9.style.background = '#e5e5e5';
		circle10.style.background = '#e5e5e5';
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 8) {
		circle9.style.background = '#e5e5e5';
		circle10.style.background = '#e5e5e5';
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 9) {
		circle10.style.background = '#e5e5e5';
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 10) {
		circle11.style.background = '#e5e5e5';
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}
}

eel.expose(updateRPM);
function updateRPM(rpmValue) {
	console.log('working');
	rpm.textContent = rpmValue;

	if (rpmValue > 867) {
		circle1.style.background = '#198C19';
		circle2.style.background = '#198C19';
	}

	if (rpmValue > 1734) {
		circle2.style.background = '#198C19';
	}

	if (rpmValue > 2601) {
		circle3.style.background = '#198C19';
	}

	if (rpmValue > 3468) {
		circle4.style.background = '#198C19';
	}

	if (rpmValue > 4335) {
		circle5.style.background = '#198C19';
	}

	if (rpmValue > 5202) {
		circle6.style.background = '#FF0000';
	}

	if (rpmValue > 6069) {
		console.log(rpmValue);
		circle7.style.background = '#FF0000';
	}

	if (rpmValue > 6936) {
		circle8.style.background = '#FF0000';
	}

	if (rpmValue > 7803) {
		circle9.style.background = '#FF0000';
	}

	if (rpmValue > 8670) {
		circle10.style.background = '#FF0000';
	}

	if (rpmValue > 9537) {
		console.log(rpmValue);
		circle11.style.background = '#0000FF';
	}

	if (rpmValue > 10404) {
		circle12.style.background = '#0000FF';
	}

	if (rpmValue > 11271) {
		circle13.style.background = '#0000FF';
	}

	if (rpmValue > 12138) {
		circle14.style.background = '#0000FF';
	}

	if (rpmValue > 13005) {
		circle15.style.background = '#0000FF';
	}
}
