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
	circle1.style.background = '#e5e5e5';
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

	if (currentRPMCircle === 11) {
		circle12.style.background = '#e5e5e5';
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 12) {
		circle13.style.background = '#e5e5e5';
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 13) {
		circle14.style.background = '#e5e5e5';
		circle15.style.background = '#e5e5e5';
	}

	if (currentRPMCircle === 14) {
		circle15.style.background = '#e5e5e5';
	}
}

eel.expose(updateRPM);
function updateRPM(rpmValue) {
	console.log('working');
	rpm.textContent = rpmValue;

	if (rpmValue > 867) {
		circle1.style.background = '#198C19';
		resetNextRPMBars(1);
	}

	if (rpmValue > 1734) {
		circle2.style.background = '#198C19';
		resetNextRPMBars(2);
	}

	if (rpmValue > 2601) {
		circle3.style.background = '#198C19';
		resetNextRPMBars(3);
	}

	if (rpmValue > 3468) {
		circle4.style.background = '#198C19';
		resetNextRPMBars(4);
	}

	if (rpmValue > 4335) {
		circle5.style.background = '#198C19';
		resetNextRPMBars(5);
	}

	if (rpmValue > 5202) {
		circle6.style.background = '#FF0000';
		resetNextRPMBars(6);
	}

	if (rpmValue > 6069) {
		circle7.style.background = '#FF0000';
		resetNextRPMBars(7);
	}

	if (rpmValue > 6936) {
		circle8.style.background = '#FF0000';
		resetNextRPMBars(8);
	}

	if (rpmValue > 7803) {
		circle9.style.background = '#FF0000';
		resetNextRPMBars(9);
	}

	if (rpmValue > 8670) {
		circle10.style.background = '#FF0000';
		resetNextRPMBars(10);
	}

	if (rpmValue > 9537) {
		circle11.style.background = '#0000FF';
		resetNextRPMBars(11);
	}

	if (rpmValue > 10404) {
		circle12.style.background = '#0000FF';
		resetNextRPMBars(12);
	}

	if (rpmValue > 11271) {
		circle13.style.background = '#0000FF';
		resetNextRPMBars(13);
	}

	if (rpmValue > 12138) {
		circle14.style.background = '#0000FF';
		resetNextRPMBars(14);
	}

	if (rpmValue > 13000) {
		circle15.style.background = '#0000FF';
	}
}
