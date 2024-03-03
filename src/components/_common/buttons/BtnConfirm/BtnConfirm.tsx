import clx from 'classnames';
import styles from './styles.css';

interface BtnConfirmProps {
	title: string;
	fixed?: boolean;
	className?: string;
}

export default function BtnConfirm({ title, fixed, className }: BtnConfirmProps) {
	return (
		<div className={clx(styles.fixedArea({ fixed: fixed ?? true }), className)}>
			<button type="button" className={styles.buttonConfirm}>
				{title}
			</button>
		</div>
	);
}
