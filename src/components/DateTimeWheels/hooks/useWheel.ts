// import { useState, useEffect, useRef, type SetStateAction } from 'react';
// import dayjs, { type Dayjs } from 'dayjs';
// import { AssertionError } from 'assert';

// import { useWheelData } from './useWheelData';
// import { useWheelTouch } from './useWheelTouch';
// import type { WheelDataType, WheelType, WheelPrevState, WheelState } from '../_types';

// // export type WheelRefs = {
// // 	[_ in WheelType]: React.RefObject<HTMLDivElement>;
// // };

// const _format = (value: number) => value.toString().padStart(2, '0');
// const _seq = (end: number, start: number = 1) =>
// 	Array.from({ length: end - start + 1 }).map((_, i) => i + start);

// export const useWheel = (startDate?: Dayjs) => {
// 	// const now = startDate && dayjs(startDate).isValid() ? startDate : dayjs();
// 	// const [selectedDate, setSelectedDate] = useState<Dayjs>(now);

// 	// const _datesOnStart = Array.from({ length: 101 }).map((_, i) =>
// 	// 	now.add(i - 50).format('MM년 DD일 dd'),
// 	// );
// 	// const [dates, setDates] = useState<string[]>(_datesOnStart);
// 	// const meridiems = ['오전', '오후'];
// 	// const hours = Array.from({ length: 101 }).map((_, i) =>
// 	// 	String(((i - 50) % 12) + (now.hour() % 12)).padStart(2, '0'),
// 	// );
// 	// const minutes = Array.from({ length: 101 }).map((_, i) =>
// 	// 	String(((i - 50) % 60) + now.minute()).padStart(2, '0'),
// 	// );

// 	// return {
// 	// 	selectedDate,
// 	// 	setSelectedDate,
// 	// 	dates,
// 	// 	hours,
// 	// 	meridiems,
// 	// 	minutes,
// 	// };

// 	const data = useWheelData(startDate);
// 	const { ref, y, itemHeight } = useWheelTouch();

// 	useEffect(() => {});

// 	return {
// 		ref,
// 		y,
// 		itemHeight,
// 		...data,
// 	};

// 	// const [year, setYear] = useState(now.year());
// 	// const [months, setMonths] = useState<string[]>(_seq(12));
// 	// const [dates, setDates] = useState<string[]>([]);
// 	// const days = ['일', '월', '화', '수', '목', '금', '토'];
// 	// const meridiems = ['오전', '오후'];
// 	// const hours = _seq(12);
// 	// const minutes = _seq(59, 0);
// };
