import StepBase from '../StepBase';
import styles from './styles.css';

export interface DatePickerProps {
	beforeSelect?: () => void;
}

export default function DatePicker({ beforeSelect }: DatePickerProps) {
	const handleClickSelect = () => {
		beforeSelect && beforeSelect();
	};
	return (
		<StepBase className={styles.wrapper} title="날짜 및 시간">
			<div className={styles.mainWrapper}>
				<button className={styles.select} onClick={handleClickSelect}>
					선택하기
				</button>
			</div>
		</StepBase>
	);
}
