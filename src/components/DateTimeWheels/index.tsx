'use client';

// import { style } from '@vanilla-extract/css';
import { useState, createContext } from 'react';
import dayjs from 'dayjs';
import styles, { wheel, item } from './styles.css';
import { useWheelData } from './hooks';
import { Wheel, TimeDivider, Highlight } from './components';
import { WheelDataType } from './_types';
import { useWheelState } from './hooks/useWheelState';
import { DataContext, StateContext } from './contexts';

DateTimeWheels.Wheel = Wheel;
DateTimeWheels.TimeDivider = TimeDivider;

interface DateTimeWheelsProps {}

export default function DateTimeWheels({}: DateTimeWheelsProps) {
	const now = dayjs();
	const data = useWheelData(now);
	const selected = useWheelState(now);

	return (
		<div className={styles.container}>
			<DateTimeWheels.Wheel type="date" display={data.date} />
			<DateTimeWheels.Wheel
				type="meridiem"
				display={data.meridiem}
				selected={selected.meridiem}
			/>
			<DateTimeWheels.Wheel type="hour" display={data.hour} selected={selected.hour} />
			<DateTimeWheels.TimeDivider />
			<DateTimeWheels.Wheel
				type="minute"
				display={data.minute}
				selected={selected.minute}
			/>

			<div className={styles.highlight}></div>
		</div>
	);
}
