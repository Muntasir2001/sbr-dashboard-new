import updateRPMBar from './updateRPMBar.js';
// import resetRPM from './resetRPM.js';

const rpm = document.querySelector('.rpm');

eel.expose(updateRPM);
function updateRPM(rpmValue) {
	rpm.textContent = rpmValue;

	updateRPMBar(rpmValue);
}
