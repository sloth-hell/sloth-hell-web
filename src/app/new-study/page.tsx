'use client';

import { useState } from 'react';
import DateTimeWheels from '@/components/DateTimeWheels';
import { BtnConfirm, BtnToggle } from '@/components/_common/buttons';
import styles from './styles.css';

export default function NewStudyPage() {
	const [active, setActive] = useState(true);
	const handleClick = () => {
		setActive(!active);
	};
	return (
		<main className={styles.main}>
			<DateTimeWheels />
			<BtnConfirm title="확인" />
			<div style={{ display: 'flex' }}>
				<BtnToggle
					title="True"
					active={active}
					onClick={handleClick}
					className={styles.test}
				/>
				<BtnToggle title="False" active={false} className={styles.test} />
			</div>
		</main>
	);
}
