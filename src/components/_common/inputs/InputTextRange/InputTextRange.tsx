import { useMemo } from 'react';
import clx from 'classnames';
import { InputTextBase } from '..';
import type {
	InputTextEvent,
	InputTextInputEvent,
	InputTextEventHandler,
} from '../_types';
import styles from './styles.css';
import { useInputInfo } from '../_hooks';

type SeparatePropOptional<T> = [T | undefined, T | undefined];
type SeparateProp<T> = [T, T];
type SharedOrSeparateProp<T> = T | SeparateProp<T>;

export interface InputTextRangeProps {
	value: SeparateProp<string>;
	onInput: SharedOrSeparateProp<InputTextEventHandler<string>>;
	onFocus?: SharedOrSeparateProp<() => void>;
	onBlur?: SharedOrSeparateProp<() => void>;
	placeholder?: SharedOrSeparateProp<string>;
	title?: string;
	largeTitle?: boolean;
	hideDelBtn?: SharedOrSeparateProp<boolean>;
	hideAll?: boolean;
	range?: [string, string];
	className?: string;
	style?: React.CSSProperties;
	ref?: SeparatePropOptional<React.RefObject<HTMLInputElement>>;
	isError?: SharedOrSeparateProp<boolean>;
	errorMessage?: string;
	normalMessage?: string;
	unit?: SharedOrSeparateProp<string>;
}

const cloneSharedProp = <T,>(prop: T | [T, T]) => {
	return Array.isArray(prop) ? prop : [prop, prop];
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
	const placeholders = cloneSharedProp(placeholder);
	const isErrors = cloneSharedProp(isError);
	const units = cloneSharedProp(unit);

	const onInputs = useMemo(() => {
		const [onInputStart, onInputEnd] = Array.isArray(onInput)
			? onInput
			: [onInput, onInput];

		return [
			({ value }: InputTextInputEvent) => {
				onInputStart(value);
			},
			({ value }: InputTextInputEvent) => {
				onInputEnd(value);
			},
		];
	}, [onInput]);

	const onFocuses = useMemo(() => {
		const [onFocusStart, onFocusEnd] = Array.isArray(onFocus)
			? onFocus ?? []
			: [onFocus, onFocus];

		return [
			({ target }: InputTextEvent) => {
				const { value } = target as HTMLInputElement;
				requestAnimationFrame(() => {
					const caretPosition = value.length - (unit?.[0]?.length ?? 0);
					target?.setSelectionRange(caretPosition, caretPosition);
				});
				onFocusStart && onFocusStart();
			},
			({ target }: InputTextEvent) => {
				const { value } = target as HTMLInputElement;
				requestAnimationFrame(() => {
					const caretPosition = value.length - (unit?.[1]?.length ?? 0) - 1;
					target?.setSelectionRange(caretPosition, caretPosition);
				});
				onFocusEnd && onFocusEnd();
			},
		];
	}, [onFocus, unit]);

	const onBlurs = cloneSharedProp(onBlur);

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
					onFocus={onFocuses?.[0]}
					onBlur={onBlurs[0]}
					isError={isErrors[0]}
					placeholder={placeholders[0]}
					hideDelBtn={hideDelBtns[0]}
					ref={ref?.[0]}
					postfix={units[0]}
				/>
				<span className={styles.separater}>-</span>
				<InputTextBase
					value={value[1]}
					onInput={onInputs[1]}
					onFocus={onFocuses?.[1]}
					onBlur={onBlurs[1]}
					isError={isErrors[0]}
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
