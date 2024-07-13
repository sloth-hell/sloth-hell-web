import { TextArea } from '@/components/_common';
import StepBase from '../StepBase';
import styles from './styles.css';

interface PlaceAndLocationProps {
	onInput: (value: string) => void;
}

export default function PlaceAndLocation({ onInput }: PlaceAndLocationProps) {
	const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
		onInput((event.target as HTMLTextAreaElement).value);
	};
	return (
		<StepBase title="장소 및 위치">
			<TextArea
				className={styles.textArea}
				placeholder="대략적인 위치만 공유하고, 자세한 장소는 오픈채팅방에서 공유해 주세요."
				maxLength={30}
				onInput={handleInput}
			/>
		</StepBase>
	);
}
