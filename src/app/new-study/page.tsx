import DateTimeWheels from '@/components/DateTimeWheels';
import { BtnConfirm, BtnToggle } from '@/components/_common/buttons';
import styles from './styles.css';

export default function NewStudyPage() {
	return (
		<main className={styles.main}>
			<DateTimeWheels />
			<BtnConfirm title="확인" />
			<div style={{ display: 'flex' }}>
				<BtnToggle title="True" active={true} className={styles.test} />
				<BtnToggle title="False" active={false} className={styles.test} />
			</div>
		</main>
	);
}
