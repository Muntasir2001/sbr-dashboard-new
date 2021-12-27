export default function (oilTempValue) {
	const oilTemp = document.querySelector('.oil-temp-value');

	oilTemp.textContent = `${oilTempValue}°C`;
}
