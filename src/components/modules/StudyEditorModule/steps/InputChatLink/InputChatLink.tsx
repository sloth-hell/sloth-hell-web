import { useState } from 'react';
import { launchKakaoTalk } from '@/workers';
import { InputTextSingle } from '@/components/_common/';
import StepBase from '../StepBase';
import styles from './styles.css';

export interface InputChatLinkProps {
	onInput: (value: string) => void;
}

export default function InputChatLink({ onInput }: InputChatLinkProps) {
	const [chatUrl, setChatUrl] = useState('');

	const handleInputChatUrl = (value: string) => {
		setChatUrl(value);
		onInput(value);
	};

	return (
		<StepBase title="카카오톡 링크">
			<InputTextSingle
				placeholder="오픈채팅방 링크를 입력해주세요."
				value={chatUrl}
				onInput={handleInputChatUrl}
				maxLength={30}
				subTextType="count">
				<p onClick={launchKakaoTalk} className={styles.launchKakao}>
					카카오톡 실행하기
				</p>
			</InputTextSingle>
		</StepBase>
	);
}
