import { atom } from 'jotai';

export interface ConfirmPopup {
	isOpen: boolean;
	title?: string;
	description?: string;
	confirm?: { label: string; onClick?: React.MouseEventHandler<HTMLButtonElement> };
	cancel?: { label: string; onClick?: React.MouseEventHandler<HTMLButtonElement> };
}

export const confirmPopup = atom<ConfirmPopup>({ isOpen: false });
