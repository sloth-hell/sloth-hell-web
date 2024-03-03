import clx from 'classnames';
import styles from './styles.css';

interface PopupBaseBodyProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export default function PopupBaseBody({
	children,
	className,
	style,
}: PopupBaseBodyProps) {
	return (
		<aside className={clx(styles.body, className)} style={style}>
			{children}
		</aside>
	);
}
