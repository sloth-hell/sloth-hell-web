import { useMemo } from 'react';

interface UseInputInfoProps {
	isError?: boolean;
	isFocused?: boolean;
	errorMessage?: string;
	focusedMessage?: string;
	normalMessage?: string;
}

interface InputInfo {
	status: 'error' | 'focused' | 'normal';
	message?: string;
}

export const useInputInfo = ({
	isError,
	isFocused,
	errorMessage,
	focusedMessage,
	normalMessage,
}: UseInputInfoProps): InputInfo => {
	return useMemo(() => {
		if (isError && errorMessage) {
			return { status: 'error', message: errorMessage };
		}

		if (isFocused && focusedMessage) {
			return { status: 'focused', message: focusedMessage };
		}

		return { status: 'normal', message: normalMessage };
	}, [isError, isFocused, errorMessage, focusedMessage, normalMessage]);
};
