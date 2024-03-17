import { useState, useEffect } from 'react';

type UsePopupTransitionOptions = {
	timingOpen?: number;
	timingClose?: number;
};

export const usePopupTransition = (
	isOpen: boolean,
	options?: UsePopupTransitionOptions,
) => {
	const [isOpenBody, setIsOpenBody] = useState(false);
	const [isOpenBackdrop, setIsOpenBackdrop] = useState(false);

	const { timingOpen, timingClose } = options ?? {};

	const openPopup = () => {
		setIsOpenBackdrop(true);
		setTimeout(() => {
			setIsOpenBody(true);
		}, timingOpen ?? 0);
	};

	const closePopup = () => {
		setIsOpenBody(false);
		setTimeout(() => {
			setIsOpenBackdrop(false);
		}, timingClose ?? 0);
	};

	useEffect(() => {
		if (isOpen) {
			openPopup();
		} else {
			closePopup();
		}
	}, [isOpen]);

	return { isOpenBackdrop, isOpenBody, openPopup, closePopup };
};
