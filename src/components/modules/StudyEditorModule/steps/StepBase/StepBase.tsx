import { useEffect, useMemo, useRef } from 'react';
import clx from 'classnames';
import { SimpleLabel } from '@/components/_common';
import styles from './styles.css';

interface StepBaseProps extends React.HTMLAttributes<HTMLElement> {
	title?: string;
	largeTitle?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

let _scrollTimer: NodeJS.Timeout | null = null;

export default function StepBase({
	title,
	largeTitle = false,
	children,
	className,
	style,
}: StepBaseProps) {
	const titleType = useMemo(() => (largeTitle ? 'large' : 'normal'), [largeTitle]);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (_scrollTimer) {
			clearTimeout(_scrollTimer);
		}

		_scrollTimer = setTimeout(() => {
			if (ref.current) {
				ref.current.scrollIntoView({ behavior: 'smooth' });
			}

			_scrollTimer = null;
		}, 150);
	}, [ref.current]);

	return (
		<div className={clx(styles.container, className)} style={style} ref={ref}>
			{title && (
				<SimpleLabel className={styles.title({ type: titleType })} type={titleType}>
					{title}
				</SimpleLabel>
			)}
			{children}
		</div>
	);
}
