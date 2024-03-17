import { useState, useEffect } from 'react';
import clx from 'classnames';
import { usePopupTransition } from '../hooks';
import PopupBase from '../PopupBase';
import styles from './styles.css';

export interface PopupBottomProps {
	isOpen: boolean;
	onClose?: () => void;
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
}

export default function PopupBottom({
	isOpen,
	onClose,
	className,
	style,
	children,
}: PopupBottomProps) {
	const { closePopup, isOpenBody, isOpenBackdrop } = usePopupTransition(isOpen, {
		timingOpen: 100,
		timingClose: 200,
	});

	return (
		<PopupBase
			isOpen={isOpenBackdrop}
			className={clx(styles.bottomBody, { [styles.open]: isOpenBody }, className)}
			style={style}
			onClose={onClose}
			onClickBackdrop={closePopup}>
			{children}
		</PopupBase>
	);
}
