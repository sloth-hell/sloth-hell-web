import styles from './styles.css';

export interface CheckBoxProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
	label?: string;
}

export default function CheckBox({ checked, onChange, label }: CheckBoxProps) {
	const handleChange: React.FormEventHandler<HTMLInputElement> = (event) => {
		onChange((event.target as HTMLInputElement).checked);
	};
	return (
		<form className={styles.form}>
			<input
				type="checkbox"
				className={styles.checkbox}
				checked={checked}
				onChange={handleChange}
				id="checkbox"
			/>
			<label htmlFor="checkbox" className={styles.label}>
				{label}
			</label>
		</form>
	);
}
