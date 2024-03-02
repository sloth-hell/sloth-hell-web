import styles, { wheel, item } from '../styles.css';

export default function TimeDivider() {
	return (
		<div className={styles.dividers}>
			<div className={item({ bound: true })}>:</div>
			<div className={item({})}>:</div>
			<div className={item({ selected: true })}>:</div>
			<div className={item({})}>:</div>
			<div className={item({ bound: true })}>:</div>
		</div>
	);
}
