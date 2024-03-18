'use client';

import clx from 'classnames';
import { usePopupTransition } from '../hooks';
import PopupBase from '../PopupBase';
import styles from './styles.css';

interface PopupConfirmProps {
	isOpen: boolean;
	onClose?: () => void;
	className?: string;
	style?: React.CSSProperties;
	title?: string;
	description?: string;
	confirm?: { label: string; onClick?: React.MouseEventHandler<HTMLButtonElement> };
	cancel?: { label: string; onClick?: React.MouseEventHandler<HTMLButtonElement> };
}

export default function PopupConfirm({
	isOpen,
	onClose,
	className,
	style,
	title,
	description,
	confirm,
	cancel,
}: PopupConfirmProps) {
	const { closePopup, isOpenBody, isOpenBackdrop } = usePopupTransition(isOpen, {
		timingOpen: 60,
		timingClose: 100,
	});

	const handleClickConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
		closePopup();
		if (confirm?.onClick) {
			confirm.onClick(event);
		}
	};
	const handleClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
		closePopup();
		if (confirm?.onClick) {
			confirm.onClick(event);
		}
	};

	return (
		<PopupBase
			isOpen={isOpenBackdrop}
			className={clx(styles.popupConfirm, { [styles.open]: isOpenBody }, className)}
			style={style}
			onClose={onClose}>
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{description}</p>
			<div className={styles.buttons}>
				{cancel && (
					<button
						type="button"
						className={styles.button({ type: 'cancel' })}
						onClick={handleClickCancel}>
						{cancel.label}
					</button>
				)}
				<button
					type="button"
					className={styles.button({ type: 'confirm' })}
					onClick={handleClickConfirm}>
					{confirm?.label ?? '닫기'}
				</button>
			</div>
		</PopupBase>
	);
}
