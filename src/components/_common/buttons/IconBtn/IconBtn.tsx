import Image, { type StaticImageData } from 'next/image';
import clx from 'classnames';
import styles from './styles.css';

export interface IconBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
	iconSrc: StaticImageData;
	alt?: string;
}

export default function IconBtn({
	iconSrc,
	onClick,
	className,
	children,
	alt = '',
	...rest
}: IconBtnProps) {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<button
			type="button"
			className={clx(styles.iconBtn, className)}
			onClick={handleClick}
			{...rest}>
			<Image src={iconSrc} className={styles.icon} alt={alt} />
			{children}
		</button>
	);
}
