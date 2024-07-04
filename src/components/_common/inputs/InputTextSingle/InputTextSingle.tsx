'use client';

import clx from 'classnames';
import { InputTextBase } from '..';
import { useInputInfo } from '../_hooks';
import type {
	InputTextInputHandler,
	InputTextFocusHandler,
	InputTextBlurHandler,
} from '../_types';
import styles from './styles.css';

interface InputTextProps {
	value: string;
	onInput: InputTextInputHandler;
	onFocus?: InputTextFocusHandler;
	onBlur?: InputTextBlurHandler;
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
	title,
	largeTitle,
	value,
	placeholder,
	onInput,
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

	return (
		<div className={clx(styles.container, className)} style={style}>
			{title && (
				<p className={styles.title({ type: largeTitle ? 'large' : 'normal' })}>
					{title}
				</p>
			)}
			<InputTextBase
				value={value}
				onInput={onInput}
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
