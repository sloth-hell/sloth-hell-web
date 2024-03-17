import {
	useState,
	useEffect,
	createContext,
	useContext,
	type SetStateAction,
} from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import { AssertionError } from 'assert';

import type { WheelDataType } from '../_types';

export const useWheelData = (startDate?: Dayjs): WheelDataType => {
	const _startDate = startDate || dayjs();

	const _datesOnStart = Array.from({ length: 101 }).map((_, i) =>
		_startDate.add(i - 50, 'day').format('MM월 DD일 ddd'),
	);
	const [dates, setDates] = useState<string[]>(_datesOnStart);
	const meridiems = ['오전', '오후'];
	const hours = Array.from({ length: 101 }).map((_, i) =>
		String((((i - 50 + _startDate.hour()) % 12) + 12) % 12).padStart(2, '0'),
	);
	const minutes = Array.from({ length: 101 }).map((_, i) =>
		String((((i - 50 + _startDate.minute()) % 60) + 60) % 60).padStart(2, '0'),
	);

	console.log({
		date: dates,
		hour: hours,
		meridiem: meridiems,
		minute: minutes,
	});

	return {
		date: dates,
		hour: hours,
		meridiem: meridiems,
		minute: minutes,
	};
};

// export const useWheelData = (): WheelDataType => {
// 	const _format = (value: number) => value.toString().padStart(2, '0');
// 	const _seq = (end: number, start: number = 1) =>
// 		Array.from({ length: end - start + 1 }).map((_, i) => _format(i + start));

// 	const now = dayjs();

// 	// const [year, setYear] = useState(now.year());
// 	// const [date, setDate] = useState(now.date());

// 	// const [months, setMonths] = useState<string[]>(_seq(12));
// 	// const [dates, setDates] = useState<string[]>([]);
// 	// const [days, setDays] = useState<string[]>([]);
// 	// const days = ['일', '월', '화', '수', '목', '금', '토'];
// 	const meridiems = ['오전', '오후'];
// 	const hours = _seq(12);
// 	const minutes = _seq(59, 0);

// 	const [prevState, setPrevState] = useState<WheelPrevState>({});
// 	const [selectedState, setSelectedState] = useState<WheelState>({
// 		month: now.month(),
// 		date: now.date(),
// 		day: now.day(),
// 		hour: now.hour() - 1,
// 		minute: now.minute() - 1,
// 		meridiem: now.hour() < 12 ? 0 : 1,
// 	});

// 	// const assertDefinedPrev = <T>(value: SetStateAction<T>, key: keyof WheelState) => {
// 	// 	if (typeof value === 'function' && prevState[key] === undefined) {
// 	// 		throw new AssertionError({ message: `prevState.${key} is undefined` });
// 	// 	}
// 	// };
// 	const _setStateValueOf = (key: keyof WheelState) => {
// 		return (value: SetStateAction<WheelState[keyof WheelState]>) => {
// 			if (typeof value === 'function' && !prevState[key]) {
// 				throw new AssertionError({ message: `prevState.${key} is undefined` });
// 			}

// 			setPrevState((prev) => ({ ...prev, [key]: selectedState[key] }));
// 			setSelectedState((prev) => ({
// 				...prev,
// 				[key]:
// 					typeof value === 'function'
// 						? value(prevState[key] as WheelState[keyof WheelState])
// 						: value,
// 			}));
// 		};
// 	};

// 	// const setYear = _setStateValueOf('year');
// 	const setMonth = _setStateValueOf('month');
// 	const setDay = _setStateValueOf('day');
// 	const setDate = _setStateValueOf('date');
// 	const setHour = _setStateValueOf('hour');
// 	const setMinute = _setStateValueOf('minute');
// 	const setMeridiem = _setStateValueOf('meridiem');

// 	useEffect(() => {
// 		console.log('&&& month:', prevState.month, selectedState.month);
// 		if (prevState.month === 11 && selectedState.month === 0) {
// 			setYear((prev) => prev + 1);
// 		} else if (prevState.month === 0 && selectedState.month === 11) {
// 			setYear((prev) => prev - 1);
// 		}

// 		const datesInMonth = dayjs(`${year}-${selectedState.month + 1}-01`).daysInMonth();
// 		console.log('&&& datesInMonth:', datesInMonth, selectedState.month + 1);
// 		setDates(_seq(datesInMonth));
// 	}, [selectedState.month, prevState.month]);

// 	return {
// 		year,
// 		month: [months, selectedState.month, setMonth],
// 		date: [dates, selectedState.date, setDate],
// 		day: [days, selectedState.day, setDay],
// 		meridiem: [meridiems, selectedState.meridiem, setMeridiem],
// 		hour: [hours, selectedState.hour, setHour],
// 		minute: [minutes, selectedState.minute, setMinute],

// 		// data: {
// 		// 	month: months,
// 		// 	date: dates,
// 		// 	day: days,
// 		// 	meridiem: meridiems,
// 		// 	hour: hours,
// 		// 	minute: minutes,
// 		// },
// 		// selectedState,
// 		// setSelectedState,
// 		// setters: {
// 		// 	setMonth,
// 		// 	setDay,
// 		// 	setDate,
// 		// 	setHour,
// 		// 	setMinute,
// 		// 	setMeridiem,
// 		// },
// 	};
// };
