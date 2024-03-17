import { useMemo } from 'react';
import clx from 'classnames';
import styles from './styles.css';

export interface IconBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
	iconSrc: string;
}

export default function IconBtn({
	iconSrc,
	onClick,
	className,
	children,
	...rest
}: IconBtnProps) {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<button
			type="button"
			className={clx(styles.iconBtn, className)}
			onClick={handleClick}
			{...rest}>
			<img src={iconSrc} className={styles.icon} />
			{children}
		</button>
	);
}
