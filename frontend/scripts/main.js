import updateRPMBar from './rpm/updateRPMBar.js';
import updateRPMValue from './rpm/updateRPMValue.js';
import oilTempValue from './oilTemp/updateOilTempValue.js';
import updateOilTempValue from './oilTemp/updateOilTempValue.js';

eel.expose(updateRPM);
function updateRPM(rpmValue) {
	updateRPMValue(rpmValue);
	updateRPMBar(rpmValue);
}

eel.expose(updateOilTemp);
function updateOilTemp(oilTempValue) {
	updateOilTempValue(oilTempValue);
}
