import { useState, useMemo, useRef } from 'react';
import clx from 'classnames';
import { resizeTextArea } from './workers';
import styles from './styles.css';

interface TextAreaProps {
	value?: string;
	onInput?: React.FormEventHandler<HTMLTextAreaElement>;
	placeholder?: string;
	className?: string;
	style?: React.CSSProperties;
	wrapperClassName?: string;
	maxLength?: number;
}

export default function TextArea({
	onInput,
	placeholder,
	className,
	style,
	wrapperClassName,
	maxLength = 3000,
}: TextAreaProps) {
	const ref = useRef<HTMLTextAreaElement>(null);

	const [value, setValue] = useState('');

	const [isFocused, setIsFocused] = useState(false);
	const status = useMemo(() => (isFocused ? 'focused' : 'normal'), [isFocused]);

	const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
		const { value } = event.target as HTMLTextAreaElement;
		setValue(value.slice(0, maxLength));

		ref?.current && resizeTextArea(ref.current);

		onInput && onInput(event);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};
	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<div className={clx(styles.container({ status }), wrapperClassName)}>
			<textarea
				ref={ref}
				className={clx(styles.textArea, className)}
				style={style}
				value={value}
				placeholder={placeholder}
				onInput={handleInput}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			<p className={styles.count}>
				{value.length}/{maxLength}
			</p>
		</div>
	);
}
