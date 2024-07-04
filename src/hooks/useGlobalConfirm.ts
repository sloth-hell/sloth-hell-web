import { useAtom } from 'jotai';
import { confirmPopup } from '@/store/atoms';

interface UseGlobalConfirmProps {
	beforeOpen?: () => void;
	afterOpen?: () => void;
	beforeHide?: () => void;
	afterHide?: () => void;
}
type ShowConfirmArgs = {
	title?: string;
	description?: string;
	confirm?:
		| string
		| React.MouseEventHandler<HTMLButtonElement>
		| { label: string; onClick?: React.MouseEventHandler<HTMLButtonElement> };
	cancel?:
		| string
		| React.MouseEventHandler<HTMLButtonElement>
		| { label: string; onClick: React.MouseEventHandler<HTMLButtonElement> };
};
type HideConfirmArgs = {};

type ShowConfirm = ((args: ShowConfirmArgs) => void) | (() => void);

export const useGlobalConfirm = () => {
	const [_, setInfo] = useAtom(confirmPopup);

	const showConfirm: ShowConfirm = ({ title, description, confirm, cancel }) => {
		// beforeOpen && beforeOpen();
		setInfo({
			isOpen: true,
			title,
			description,
			confirm: (() => {
				if (typeof confirm === 'string') return { label: confirm, onClick: () => {} };
				if (typeof confirm === 'function') return { label: '확인', onClick: confirm };
				return confirm;
			})(),
			cancel: (() => {
				if (typeof cancel === 'string') return { label: cancel, onClick: () => {} };
				if (typeof cancel === 'function') return { label: '확인', onClick: cancel };
				return cancel;
			})(),
			// typeof cancel === 'function' ? { label: '취소', onClick: cancel } : cancel,
		});
		// afterOpen && afterOpen();
	};
	const hideConfirm = ({}: HideConfirmArgs) => {
		// beforeHide && beforeHide();
		setInfo({ isOpen: false });
		// afterHide && afterHide();
	};
	return { showConfirm, hideConfirm };
};
