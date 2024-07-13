import { TextArea } from '@/components/_common';
import StepBase from '../StepBase';
import styles from './styles.css';

interface DescriptionProps {
	onInput: (value: string) => void;
}

export default function Description({ onInput }: DescriptionProps) {
	const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
		onInput((event.target as HTMLTextAreaElement).value);
	};

	return (
		<StepBase title="기타 스터디 소개(선택)">
			<TextArea
				className={styles.textArea}
				placeholder="우리 스터디를 표현할 소개글을 입력해 주세요."
				onInput={handleInput}
			/>
		</StepBase>
	);
}
