'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useGlobalConfirm } from '@/hooks/useGlobalConfirm';
import {
	PageHeader,
	Tooltip,
	IconBtn,
	BtnConfirm,
	PopupBottom,
} from '@/components/_common';
import {
	InputTitle,
	InputChatLink,
	DatePicker,
	PlaceAndLocation,
	Description,
	Gender,
	AgeRange,
	CommunicationLevel,
} from './steps';
import type { GenderData } from './steps/Gender';
import styles from './styles.css';

import HowStudy from 'public/ico/24/how_study.svg';

interface StudyEditorModuleProps {}

export default function StudyEditorModule({}: StudyEditorModuleProps) {
	const router = useRouter();
	const goToHome = () => {
		router.replace('/');
	};

	const [step, setStep] = useState(0); // todo
	const [title, setTitle] = useState('');
	const [chatLinkl, setChatLink] = useState('');
	const [placeAndLocation, setPlaceAndLocation] = useState('');
	const [description, setDescription] = useState('');
	const [gender, setGender] = useState('상관없음');
	const [ageRange, setAgeRange] = useState<[number, number]>([0, 0]);
	const [communitcationLevel, setCommunicationLevel] = useState('');

	const [isAllFilled, setIsAllFilled] = useState(false);
	const { showConfirm } = useGlobalConfirm();

	const [isShowBottomPopup, setIsShowBottomPopup] = useState(false);

	const nextStep = useCallback(() => {
		setStep((prev) => prev + 1);
	}, []);

	const handleInputTitle = (value: string, isError: boolean) => {
		setTitle(value);
		if (step <= 0 && !isError) nextStep();
	};
	const handleInputChatLink = (value: string) => {
		setChatLink(value);
		if (step <= 1) nextStep();
	};
	const handleBeforeSelectDate = () => {
		if (step <= 2) nextStep();
	};
	const handleInputPlaceAndLocation = (value: string) => {
		setPlaceAndLocation(value);
		if (step <= 3) nextStep();
	};
	const handleInputGender = (value: GenderData) => {
		setGender(value.title);
		if (step <= 4 && value.title) nextStep();
	};
	const handleInputAgeRange = (value: [number, number], isError: boolean) => {
		setAgeRange(value);
		if (step <= 5 && !isError) nextStep();
	};
	const handleInputCommunicationLevel = (value: string) => {
		setCommunicationLevel(value);
		if (step <= 6) nextStep();
	};
	const handleInputDescription = (value: string) => {
		setDescription(value);
		setIsAllFilled(true);
	};
	const handleClickConfirm = () => {
		showConfirm({
			title: '스터디 만들기',
			description: '확실합니까?',
			confirm: {
				label: '확인',
				onClick: () => {
					setIsShowBottomPopup(true);
				},
			},
			cancel: '나태지옥으로',
		});
	};

	return (
		<>
			<main className={styles.main}>
				<PageHeader
					title="새 스터디 만들기"
					onBack={goToHome}
					totalSteps={8}
					step={step}>
					<IconBtn iconSrc={HowStudy}>
						<Tooltip type="bottomLeft">스터디 만드는 법 다시 보기</Tooltip>
					</IconBtn>
				</PageHeader>
				<article className={styles.contents}>
					{step >= 0 && <InputTitle onInput={handleInputTitle} />}
					{step >= 1 && <InputChatLink onInput={handleInputChatLink} />}
					{step >= 2 && <DatePicker beforeSelect={handleBeforeSelectDate} />}
					{step >= 3 && <PlaceAndLocation onInput={handleInputPlaceAndLocation} />}
					{step >= 4 && <Gender onInput={handleInputGender} />}
					{step >= 5 && <AgeRange onInput={handleInputAgeRange} />}
					{step >= 6 && <CommunicationLevel onInput={handleInputCommunicationLevel} />}
					{step >= 7 && <Description onInput={handleInputDescription} />}
				</article>
				<BtnConfirm
					title="스터디 만들기"
					fixed={true}
					disabled={!isAllFilled}
					onClick={handleClickConfirm}
					className={styles.confirm}
				/>
				<PopupBottom isOpen={isShowBottomPopup}>
					<p>팝업</p>
					<button onClick={() => setIsShowBottomPopup(false)}>닫기</button>
				</PopupBottom>
			</main>
		</>
	);
}
