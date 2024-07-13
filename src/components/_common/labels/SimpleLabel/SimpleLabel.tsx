import clx from 'classnames';
import styles from './styles.css';

interface SimpleLabelProps {
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLParagraphElement>;
	button?: boolean;
	type?: 'normal' | 'large';
}

export default function SimpleLabel({
	className,
	style,
	children,
	onClick,
	type = 'normal',
}: SimpleLabelProps) {
	return (
		<p
			className={clx(styles.label({ type }), className)}
			style={{ ...style, cursor: onClick ? 'pointer' : 'text' }}
			onClick={onClick}>
			{children}
		</p>
	);
}
