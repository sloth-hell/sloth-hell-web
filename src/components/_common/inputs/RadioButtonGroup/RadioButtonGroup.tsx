import { useState, useEffect } from 'react';
import styles from './styles.css';

export interface RadioButtonGroupProps {
	options: string[];
	onChange?: (index: number) => void;
}

export default function RadioButtonGroup({ options, onChange }: RadioButtonGroupProps) {
	const [checkedIndex, setCheckedIndex] = useState(0);

	useEffect(() => {
		onChange && onChange(checkedIndex);
	}, [onChange, checkedIndex]);

	const eventHandlerFor = (index: number) => () => {
		setCheckedIndex(() => {
			return index;
		});
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
						checked={checkedIndex === index}
						onChange={eventHandlerFor(index)}
					/>
					<label className={styles.label}>{label}</label>
				</li>
			))}
		</ul>
	);
}
