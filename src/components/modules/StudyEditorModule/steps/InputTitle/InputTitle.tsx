import { useState, useMemo } from 'react';
import { InputTextSingle } from '@/components/_common';
import StepBase from '../StepBase';
import { InputTextInputEventHandler } from '@/components/_common/inputs';
import styles from './styles.css';

export interface InputTitleProps {
	onInput: (value: string, isError: boolean) => void;
	onChangeError?: (isError: boolean) => void;
}

export default function InputTitle({ onInput }: InputTitleProps) {
	const [title, setTitle] = useState('');
	const [isError, setIsError] = useState(false);

	const handleInputTitle = (value: string) => {
		setTitle(value);
		setIsError(value.length > 0 && value.length < 5);
		onInput(value, value.length < 5);
	};

	return (
		<StepBase title="스터디 이름">
			<InputTextSingle
				value={title}
				placeholder="최소 5글자 이상 입력해주세요."
				errorMessage="최소 5글자 이상 입력해주세요."
				isError={isError}
				onInput={handleInputTitle}
				maxLength={30}
				subTextType="count"
			/>
		</StepBase>
	);
}
