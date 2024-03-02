import DateTimeWheels from '@/components/DateTimeWheels';
import styles from './styles.css';
import { BtnConfirm } from '@/components/_common/buttons';

export default function NewStudyPage() {
	return (
		<main className={styles.main}>
			<DateTimeWheels />
			<BtnConfirm title="확인" />
		</main>
	);
}
