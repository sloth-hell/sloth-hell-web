import clx from 'classnames';
import styles from './styles.css';

interface BtnToggleProps {
	title: string;
	imgSrc?: string;
	active?: Boolean;
	className?: string;
}

export default function BtnToggle({
	title,
	imgSrc,
	active,
	className,
}: BtnToggleProps) {
	return (
		<button
			type="button"
			className={clx(
				styles.btnToggle({ active: (active ?? false) as boolean }),
				className,
			)}>
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
