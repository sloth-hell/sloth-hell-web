'use client';

import Image from 'next/image';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import clx from 'classnames';
import type {
	InputTextInputHandler,
	InputTextFocusHandler,
	InputTextBlurHandler,
} from '../_types';
import styles from './styles.css';

export interface InputTextBaseProps {
	value: string;
	onInput: InputTextInputHandler;
	onFocus?: InputTextFocusHandler;
	onBlur?: InputTextBlurHandler;
	placeholder?: string;
	isError?: boolean;
	subTextType?: 'count' | 'custom' | false;
	customSubText?: string;
	maxLength?: number;
	hideDelBtn?: boolean;
	style?: React.CSSProperties;
	className?: string;
	ref?: React.RefObject<HTMLInputElement>;
	postfix?: string;
}

export default function InputTextBase({
	value,
	onInput,
	placeholder,
	isError,
	subTextType,
	customSubText,
	maxLength,
	hideDelBtn,
	style,
	className,
	ref,
	onFocus,
	onBlur,
	postfix,
}: InputTextBaseProps) {
	const [valueInternal, setValueInternal] = useState(value);

	const [isFocused, setIsFocused] = useState(false);
	const [isShowDelete, setIsShowDelete] = useState(false);

	const refInternal = useRef<HTMLInputElement>(null);

	const handleInput: React.FormEventHandler<HTMLInputElement> = (event) => {
		let _value = (event.target as HTMLInputElement).value;

		if (_value.length >= (maxLength ?? 0)) {
			_value = _value.slice(0, maxLength);
		}

		if (postfix) {
			_value = _value.replace(postfix, '');
		}

		onInput(_value);
	};

	useEffect(() => {
		setTimeout(() => {
			setIsShowDelete(value.length > 0);
		}, 100);
	}, [value]);

	const _ref = useMemo(() => {
		return ref ?? refInternal;
	}, [ref, refInternal]);

	const status = useMemo(() => {
		if (isError) {
			return 'error';
		}
		if (isFocused) {
			return 'focused';
		}
		return 'normal';
	}, [isError, isFocused]);

	const countString = useMemo(() => {
		const _length = String(value.length);
		if (!maxLength) {
			return _length;
		}
		const _maxLength = String(maxLength);
		return `${_length}/${_maxLength}`;
	}, [value, maxLength]);

	const handleFocus: React.FormEventHandler<HTMLInputElement> = (event) => {
		setIsFocused(true);

		const target = event.target as HTMLInputElement;
		const { length } = target.value;

		if (length > 0) {
			target.setSelectionRange(length, length);
		}

		onFocus && onFocus();
	};

	const handleBlur: React.FormEventHandler<HTMLInputElement> = () => {
		setIsFocused(false);
		onBlur && onBlur();
	};

	const handleClickDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
		setValueInternal('');
		onInput('');
		_ref.current && _ref.current.focus();
	};

	useEffect(() => {
		const _postfix = postfix ?? '';

		if (value.length > 0) {
			setValueInternal(value + _postfix);
		} else if (value.length <= _postfix.length) {
			setValueInternal('');
		}
	}, [value]);

	useEffect(() => {
		_ref.current?.setSelectionRange(
			valueInternal.length - (postfix?.length ?? 0),
			valueInternal.length - (postfix?.length ?? 0),
		);

		if (valueInternal.length < (postfix?.length ?? 0)) {
			setValueInternal('');
		}
	}, [valueInternal]);

	const SubText = useCallback(() => {
		if (subTextType === 'count') {
			return <p className={styles.subText}>{countString}</p>;
		}

		if (subTextType === 'custom' && customSubText) {
			return <p className={styles.subText}>{customSubText}</p>;
		}

		return null;
	}, [subTextType, countString, customSubText]);

	return (
		<div className={clx(styles.container({ status }), className)} style={style}>
			<input
				type="text"
				className={styles.input}
				value={valueInternal}
				placeholder={placeholder}
				onInput={handleInput}
				onFocus={handleFocus}
				onBlur={handleBlur}
				maxLength={maxLength}
				ref={_ref}
			/>
			<SubText />
			{!hideDelBtn && isShowDelete && (
				<button
					type="button"
					className={styles.delBtn}
					onClick={handleClickDelete}
					tabIndex={-1}>
					<Image src="/ico/20/inputdelete.svg" alt="delete" width={20} height={20} />
				</button>
			)}
		</div>
	);
}
