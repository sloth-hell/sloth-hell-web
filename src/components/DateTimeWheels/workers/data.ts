import { WheelType } from '../_types';

//'month' | 'date' | 'day' | 'meridiem' | 'hour' | 'minute';

export const format = (value: number) => {
	return String(value).padStart(2, '0');
};

export const createWheelData = (type: WheelType) => {
	return {
		month: Array.from({ length: 12 }).map((_, i) => format(i + 1)),
	};
};
