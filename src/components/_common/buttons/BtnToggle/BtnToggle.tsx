'use client';

import type { RefObject, MouseEventHandler, MouseEvent } from 'react';
import clx from 'classnames';
import styles from './styles.css';

interface BtnToggleProps {
	title: string;
	imgSrc?: string;
	active: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	ref?: RefObject<HTMLButtonElement>;
}

export default function BtnToggle({
	title,
	imgSrc,
	active,
	onClick,
	className,
	ref,
}: BtnToggleProps) {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<button
			type="button"
			className={clx(styles.btnToggle({ active }), className)}
			onClick={handleClick}
			ref={ref}>
			{imgSrc && (
				<picture className={styles.image}>
					<source srcSet={imgSrc} type="image/webp" />
					<img src={imgSrc} alt={title} />
				</picture>
			)}
			{title}
		</button>
	);
}
