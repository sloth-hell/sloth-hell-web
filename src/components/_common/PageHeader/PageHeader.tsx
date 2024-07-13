import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useMemo } from 'react';
import styles, { vars } from './styles.css';

export interface PageHeaderProps {
	title?: string;
	onBack?: () => void;
	children?: React.ReactNode;
	progress?: number;
	totalSteps?: number;
	step?: number;
}

export default function PageHeader({
	title,
	onBack,
	children,
	progress,
	totalSteps,
	step,
}: PageHeaderProps) {
	const _progressInPercent = useMemo(() => {
		if (progress !== undefined) {
			return progress;
		}

		if (totalSteps && step) {
			return (step / totalSteps) * 100;
		}

		return null;
	}, [totalSteps, step]);

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
			{_progressInPercent !== null && (
				<div className={styles.progressBar}>
					<div
						className={styles.progressBarActive}
						style={assignInlineVars({
							[vars.progressPercent]: `${_progressInPercent}%`,
						})}></div>
				</div>
			)}
		</header>
	);
}
