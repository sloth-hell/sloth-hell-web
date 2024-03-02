import styles from './styles.css';

interface BtnConfirmProps {
	title: string;
	fixed?: boolean;
}

export default function BtnConfirm({ title, fixed }: BtnConfirmProps) {
	return (
		<div className={styles.fixedArea({ fixed: fixed ?? true })}>
			<button type="button" className={styles.button({ confirm: true })}>
				{title}
			</button>
		</div>
	);
}
