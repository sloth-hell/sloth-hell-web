import { useMemo } from 'react';
import clx from 'classnames';
import { InputTextBase } from '..';
import type {
	InputTextInputHandler,
	InputTextFocusHandler,
	InputTextBlurHandler,
	InputMultipleTextInputHandler,
} from '../_types';
import styles from './styles.css';
import { useInputInfo } from '../_hooks';

type SeparatePropOptional<T> = [T | undefined, T | undefined];
type SeparateProp<T> = [T, T];
type SharedOrSeparateProp<T> = T | SeparateProp<T>;

export interface InputTextRangeProps {
	value: SeparateProp<string>;
	onInput: SharedOrSeparateProp<InputTextInputHandler>;
	onFocus?: SharedOrSeparateProp<InputTextFocusHandler>;
	onBlur?: SharedOrSeparateProp<InputTextBlurHandler>;
	placeholder?: SharedOrSeparateProp<string>;
	isError?: SharedOrSeparateProp<boolean>;
	title?: string;
	largeTitle?: boolean;
	hideDelBtn?: SharedOrSeparateProp<boolean>;
	hideAll?: boolean;
	range?: [string, string];
	className?: string;
	style?: React.CSSProperties;
	ref?: SeparatePropOptional<React.RefObject<HTMLInputElement>>;
	errorMessage?: string;
	normalMessage?: string;
	unit?: SharedOrSeparateProp<string>;
}

const cloneSharedProp = <T,>(value: T | [T, T]) => {
	return Array.isArray(value) ? value : [value, value];
};

export default function InputTextRange({
	value,
	onInput,
	onFocus,
	onBlur,
	placeholder,
	isError,
	hideDelBtn,
	className,
	style,
	ref,
	errorMessage,
	normalMessage,
	unit,
}: InputTextRangeProps) {
	const hideDelBtns = cloneSharedProp(hideDelBtn ?? true);
	const onInputs = cloneSharedProp(onInput);
	const onFocuses = cloneSharedProp(onFocus);
	const onBlurs = cloneSharedProp(onBlur);
	const placeholders = cloneSharedProp(placeholder);
	const isErrors = cloneSharedProp(isError);
	const units = cloneSharedProp(unit);

	const _isError = useMemo(() => {
		return isErrors.some(Boolean);
	}, [isErrors]);

	const info = useInputInfo({
		isError: _isError,
		errorMessage,
		normalMessage,
	});

	return (
		<div className={clx(styles.container, className)} style={style}>
			<div className={styles.containerInput}>
				<InputTextBase
					value={value[0]}
					onInput={onInputs[0]}
					onFocus={onFocuses[0]}
					onBlur={onBlurs[0]}
					placeholder={placeholders[0]}
					hideDelBtn={hideDelBtns[0]}
					ref={ref?.[0]}
					postfix={units[0]}
				/>
				<span className={styles.separater}>-</span>
				<InputTextBase
					value={value[1]}
					onInput={onInputs[1]}
					onFocus={onFocuses[1]}
					onBlur={onBlurs[1]}
					placeholder={placeholders[1]}
					hideDelBtn={hideDelBtns[1]}
					ref={ref?.[1]}
					postfix={units[1]}
				/>
			</div>
			{info.message && (
				<p className={styles.info({ status: info.status })}>{info.message}</p>
			)}
		</div>
	);
}
