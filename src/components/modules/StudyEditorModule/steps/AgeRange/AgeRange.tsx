import { useState, useEffect, useMemo } from 'react';
import { SimpleLabel, CheckBox, InputTextRange } from '@/components/_common';
import StepBase from '../StepBase';
import styles from './styles.css';

interface AgeRangeProps {
	onInput: (value: [number, number], isError: boolean) => void;
}

const AGE_BOUNDS = [20, 100];

const _isGreater = (num: string | number, compared: string | number) => {
	return Number(num || 0) > Number(compared || 0);
};

export default function AgeRange({ onInput }: AgeRangeProps) {
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');

	const [isCheckedAll, setIsCheckedAll] = useState(false);

	useEffect(() => {
		onInput &&
			onInput(
				[Number(start), Number(end)],
				!start || !end || _isGreater(20, start) || _isGreater(start, end),
			);
	}, [start, end]);

	const handleChangeAll = (checked: boolean) => {
		setIsCheckedAll(checked);

		if (checked) {
			setStart(String(AGE_BOUNDS[0]));
			setEnd(String(AGE_BOUNDS[1]));
		} else {
			if (Number(start) === AGE_BOUNDS[0] && Number(end) === AGE_BOUNDS[1]) {
				setStart('');
				setEnd('');
			}
		}
	};

	const handleInputStart = (value: string) => {
		setStart(value.replace(/[^\d]/g, '').substring(0, 3));
		// onInput && onInput([Number(value), Number(end)]);
		setIsCheckedAll(Number(value) === AGE_BOUNDS[0] && Number(end) === AGE_BOUNDS[1]);
	};
	const handleInputEnd = (value: string) => {
		setEnd(value.replace(/[^\d]/g, '').substring(0, 3));
		// onInput && onInput([Number(start), Number(value)]);
		setIsCheckedAll(Number(start) === AGE_BOUNDS[0] && Number(value) === AGE_BOUNDS[1]);
	};

	const isUnderTwentyStart = useMemo(() => start && _isGreater(20, start), [start]);
	const isGreaterStart = useMemo(() => _isGreater(start, end), [start, end]);
	const isErrorStart = useMemo(
		() => isUnderTwentyStart || isGreaterStart,
		[start, end],
	);
	const isErrorEnd = useMemo(() => !isUnderTwentyStart && isGreaterStart, [start, end]);

	const errorMessage = useMemo(() => {
		if (Number(start) < 20) return '20세부터 입력 가능해요.';
		if (Number(start) > Number(end)) return '나이 범위를 확인해주세요.';
		return '';
	}, [start, end]);

	return (
		<StepBase>
			<div className={styles.titleWrapper}>
				<SimpleLabel type="large">함께 할 스터디원의 나이</SimpleLabel>
				<CheckBox label="전체" checked={isCheckedAll} onChange={handleChangeAll} />
			</div>
			<InputTextRange
				title="나이"
				value={[start, end]}
				placeholder="나이입력"
				unit="세"
				isError={[isErrorStart, isErrorEnd]}
				errorMessage={errorMessage}
				onInput={[handleInputStart, handleInputEnd]}
			/>
		</StepBase>
	);
}
