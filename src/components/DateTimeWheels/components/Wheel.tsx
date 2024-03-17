import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { useWheelTouch } from '../hooks';
import styles, { wheel, item, vars } from '../styles.css';
import type { WheelType } from '../_types';

export interface WheelProps {
	type: WheelType;
	// onLoop?: () => void;
	display: string[];
	selected: [number, Dispatch<SetStateAction<number>>];
}

export default function Wheel({ type, display, selected }: WheelProps) {
	const { ref, y, itemHeight } = useWheelTouch<HTMLDivElement>({});

	return (
		<div
			className={wheel({ type })}
			// style={{ transform: `translateY(${y}px)` }}
			style={assignInlineVars({ [vars.wheelY]: `${y}px` })}
			ref={ref}>
			{display.map((title, index) => (
				<div
					key={`wheel-${index}_${type}`}
					className={item({
						type,
						selected: y > itemHeight * (index - 0.5) && y <= itemHeight * (index + 0.5),
					})}>
					{title}
				</div>
			))}
		</div>
	);
}
