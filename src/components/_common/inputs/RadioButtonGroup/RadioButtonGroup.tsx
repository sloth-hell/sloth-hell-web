import { useState, useEffect } from 'react';
import styles from './styles.css';

export interface RadioButtonGroupProps {
	value: number;
	options: string[];
	onChange: (index: number) => void;
}

export default function RadioButtonGroup({
	value,
	options,
	onChange,
}: RadioButtonGroupProps) {
	const eventHandlerFor = (index: number) => () => {
		onChange(index);
	};

	return (
		<ul className={styles.group}>
			{options.map((label, index) => (
				<li
					className={styles.itemWrapper}
					key={`radio-${index}`}
					onClick={eventHandlerFor(index)}>
					<input
						className={styles.radio}
						type="radio"
						name="radio"
						checked={value === index}
						onChange={eventHandlerFor(index)}
					/>
					<label className={styles.label}>{label}</label>
				</li>
			))}
		</ul>
	);
}
