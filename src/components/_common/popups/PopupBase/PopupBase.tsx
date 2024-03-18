'use client';

import { useEffect } from 'react';
import PopupBaseBody from './PopupBaseBody';
import PopupBaseBackdrop from './PopupBaseBackdrop';

export interface PopupBaseProps {
	isOpen: boolean;
	onClose?: () => void;
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
	onClickBackdrop?: () => void;
}

export default function PopupBase({
	children,
	onClose,
	isOpen,
	className,
	style,
	onClickBackdrop,
}: PopupBaseProps) {
	useEffect(() => {
		if (!isOpen) {
			onClose && onClose();
		}
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return (
		<PopupBase.Backdrop isOpen={isOpen} onClick={onClickBackdrop}>
			<PopupBase.Body className={className} style={style}>
				{children}
			</PopupBase.Body>
		</PopupBase.Backdrop>
	);
}

PopupBase.Body = PopupBaseBody;
PopupBase.Backdrop = PopupBaseBackdrop;
