import { useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import type { WheelStateType } from '../_types';

export const useWheelState = (starDate?: Dayjs): WheelStateType => {
	const _startDate = starDate || dayjs();
	// const now = startDate && dayjs(startDate).isValid() ? startDate : dayjs();
	const [selectedDateTime, setSelectedDateTime] = useState<Dayjs>(_startDate);
	const [date, selectedDate] = useState<number>(_startDate.date());
	const [meridiem, selectedMeridiem] = useState<number>(_startDate.hour() < 12 ? 0 : 1);
	const [hour, selectedHour] = useState<number>(_startDate.hour());
	const [minute, selectedMinute] = useState<number>(_startDate.minute());

	return {
		datetime: [selectedDateTime, setSelectedDateTime],
		date: [date, selectedDate],
		meridiem: [meridiem, selectedMeridiem],
		hour: [hour, selectedHour],
		minute: [minute, selectedMinute],
	};
};
