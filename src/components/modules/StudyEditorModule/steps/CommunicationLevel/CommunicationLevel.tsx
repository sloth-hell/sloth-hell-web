import { useState } from 'react';
import { RadioButtonGroup } from '@/components/_common';
import StepBase from '../StepBase';

interface CommunicationLevelProps {
	onInput: (value: string) => void;
}

const COMMUNICATION_LEVELS = [
	'조용하게 집중하고 싶어요',
	'가벼운 대화도 즐기면서 하고 싶어요',
	'편안하게 소통하고 대화를 나누고 싶어요',
];

export default function CommunicationLevel({ onInput }: CommunicationLevelProps) {
	const [selected, setSelected] = useState(-1);
	const handleChange = (index: number) => {
		setSelected(index);
		onInput(COMMUNICATION_LEVELS[index]);
	};

	return (
		<StepBase title="스터디 커뮤니케이션 정도" largeTitle>
			<RadioButtonGroup
				value={selected}
				options={COMMUNICATION_LEVELS}
				onChange={handleChange}
			/>
		</StepBase>
	);
}
