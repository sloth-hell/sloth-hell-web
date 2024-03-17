import type { SetStateAction, Dispatch } from 'react';
import type { Dayjs } from 'dayjs';

// export type MeridiemState = '오전' | '오후';
// export const WheelTypes = [
// 	'month',
// 	'date',
// 	'day',
// 	'meridiem',
// 	'hour',
// 	'minute',
// ] as const;

// export type WheelState = {
// 	month?: number;
// 	date?: number;
// 	day?: number;
// 	hour?: number;
// 	minute?: number;
// 	meridiem?: number;
// };

export type WheelType = 'date' | 'meridiem' | 'hour' | 'minute';
// export type WheelType = (typeof WheelTypes)[number];

// export type WheelDataType = {
// 	[key in WheelType]: string[];
// };

// export type WheelState = {
// 	[key in WheelType]: number;
// };

// export type WheelPrevState = {
// 	[key in WheelType]?: number;
// };

export type WheelDataType = {
	[key in WheelType]: string[];
	// [key in WheelType]: [string[], number, (value: React.SetStateAction<number>) => void];
};

export type WheelStateType = { datetime: [Dayjs, Dispatch<SetStateAction<Dayjs>>] } & {
	[key in WheelType]: [number, Dispatch<SetStateAction<number>>];
};
