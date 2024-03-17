import { assignInlineVars } from '@vanilla-extract/dynamic';
import styles, { vars } from './styles.css';

export interface PageHeaderProps {
	title?: string;
	onBack?: () => void;
	children?: React.ReactNode;
	progress?: number;
}

export default function PageHeader({
	title,
	onBack,
	children,
	progress,
}: PageHeaderProps) {
	return (
		<header className={styles.container}>
			<div className={styles.body}>
				<div className={styles.bodyLeft}>
					{onBack && (
						<button className={styles.back} onClick={onBack}>
							<img src="/ico/24/arr_left.svg" className={styles.backIcon} />
						</button>
					)}
					<h1 className={styles.title}>{title}</h1>
				</div>
				<div className={styles.bodyRight}>{children}</div>
			</div>
			{typeof progress === 'number' && (
				<div className={styles.progressBar}>
					<div
						className={styles.progressBarActive}
						style={assignInlineVars({ [vars.progressPercent]: `${progress}%` })}></div>
				</div>
			)}
		</header>
	);
}
