import clx from 'classnames';
import styles from './styles.css';

interface PopupBaseBackdropProps {
	isOpen: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

export default function PopupBaseBackdrop({
	isOpen,
	children,
	onClick,
}: PopupBaseBackdropProps) {
	return (
		<div
			className={clx(styles.backdrop, { [styles.openBackdrop]: isOpen })}
			onClick={onClick}>
			{children}
		</div>
	);
}
