'use client';

import type { MouseEventHandler, MouseEvent } from 'react';
import clx from 'classnames';
import styles from './styles.css';

interface BtnConfirmProps {
	title: string;
	fixed?: boolean;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

export default function BtnConfirm({
	title,
	fixed,
	disabled,
	onClick,
	className,
}: BtnConfirmProps) {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick && !disabled) {
			onClick(event);
		}
	};

	return (
		<div className={clx(styles.fixedArea({ fixed: fixed ?? false }), className)}>
			<button
				type="button"
				className={clx([styles.buttonConfirm, { [styles.disabled]: disabled }])}
				onClick={handleClick}>
				{title}
			</button>
		</div>
	);
}
