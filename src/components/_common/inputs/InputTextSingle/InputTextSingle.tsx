'use client';

import clx from 'classnames';
import { InputTextBase } from '..';
import { useInputInfo } from '../_hooks';
import type {
	InputTextEventHandler,
	InputTextInputEventHandler,
	InputTextFocusEventHandler,
	InputTextBlurEventHandler,
} from '../_types';
import styles from './styles.css';

interface InputTextProps {
	value: string;
	onInput: InputTextEventHandler<string>;
	onFocus?: InputTextFocusEventHandler;
	onBlur?: InputTextBlurEventHandler;
	placeholder?: string;
	isError?: boolean;
	title?: string;
	largeTitle?: boolean;
	subTextType?: 'count' | 'custom' | false;
	customSubText?: string;
	maxLength?: number;
	style?: React.CSSProperties;
	className?: string;
	ref?: React.RefObject<HTMLInputElement>;
	normalMessage?: string;
	errorMessage?: string;
	children?: React.ReactNode;
}

export default function InputText({
	value,
	placeholder,
	onInput,
	onFocus,
	onBlur,
	isError,
	subTextType,
	customSubText,
	errorMessage,
	normalMessage,
	maxLength,
	ref,
	className,
	style,
	children,
}: InputTextProps) {
	const info = useInputInfo({ isError, errorMessage, normalMessage });

	const handleInput: InputTextInputEventHandler = ({ value }) => {
		onInput(value);
	};

	return (
		<div className={clx(styles.container, className)} style={style}>
			<InputTextBase
				value={value}
				onInput={handleInput}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder={placeholder}
				isError={isError}
				subTextType={subTextType}
				customSubText={customSubText}
				maxLength={maxLength}
				ref={ref}
			/>
			{info.message && (
				<p className={styles.info({ status: info.status })}>{info.message}</p>
			)}
			{children}
		</div>
	);
}
