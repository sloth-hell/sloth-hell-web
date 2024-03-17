import clx from 'classnames';
import styles from './styles.css';
import { useMemo } from 'react';

export interface TooltipProps {
	isOpen?: boolean;
	onChange?: (isOpen: boolean) => void;
	type:
		| 'top'
		| 'bottom'
		| 'left'
		| 'right'
		| 'topRight'
		| 'topLeft'
		| 'bottomRight'
		| 'bottomLeft'
		| 'leftTop'
		| 'leftBottom'
		| 'rightTop'
		| 'rightBottom';
	clickToClose?: boolean;
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
}

export default function Tooltip({
	isOpen,
	onChange,
	type,
	clickToClose,
	className,
	style,
	children,
}: TooltipProps) {
	const handleClick: React.MouseEventHandler = () => {
		if (clickToClose) {
			onChange && onChange(false);
		}
	};

	const primaryPosition = useMemo(() => {
		if (/^top/.test(type)) {
			return 'top';
		}
		if (/^bottom/.test(type)) {
			return 'bottom';
		}
		if (/^left/.test(type)) {
			return 'left';
		}
		if (/^right/.test(type)) {
			return 'right';
		}

		return undefined;
	}, [type]);

	const secondaryPosition = useMemo(() => {
		if (/Right$/.test(type)) {
			return 'right';
		}
		if (/Left$/.test(type)) {
			return 'left';
		}
		if (/Top$/.test(type)) {
			return 'top';
		}
		if (/Bottom$/.test(type)) {
			return 'bottom';
		}

		return undefined;
	}, [type]);

	return (
		<>
			{(isOpen ?? true) && (
				<div
					className={clx(styles.tooltip({ position: primaryPosition }), className)}
					onClick={handleClick}
					style={style}>
					<div className={styles.head({ position: primaryPosition })}></div>
					<div className={styles.body({ position: secondaryPosition })}>{children}</div>
				</div>
			)}
		</>
	);
}
