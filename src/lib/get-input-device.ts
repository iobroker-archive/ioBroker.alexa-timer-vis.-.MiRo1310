import { useStore } from "../store/store";
import { isIobrokerValue } from "./global";
import { Timer } from "./timer-data";

export const getInputDevice = async (path: Timer): Promise<void> => {
	const store = useStore();
	const _this = store._this;
	try {
		const instance = store.getAlexaInstanceObject().instance;

		const nameStateObj = await _this.getForeignStateAsync(`alexa2.${instance}.History.name`);
		const serialStateObj = await _this.getForeignStateAsync(`alexa2.${instance}.History.serialNumber`);

		if (isIobrokerValue(nameStateObj)) {
			path.inputDevice = nameStateObj.val as string;
			store.deviceName = nameStateObj?.val as string;
		}

		if (isIobrokerValue(serialStateObj)) {
			path.serialNumber = serialStateObj.val as string;
			store.deviceSerialNumber = serialStateObj?.val as string;
		}
	} catch (error) {
		_this.log.error("Error in getInputDevice: " + JSON.stringify(error));
	}
};