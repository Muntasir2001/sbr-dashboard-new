import updateRPMBar from './rpm/updateRPMBar.js';
import updateRPMValue from './rpm/updateRPMValue.js';

eel.expose(updateRPM);
function updateRPM(rpmValue) {
	updateRPMValue(rpmValue);
	updateRPMBar(rpmValue);
}
