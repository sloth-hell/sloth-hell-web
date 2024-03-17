'use client';

import { useEffect, useState } from 'react';
import DateTimeWheels from '@/components/DateTimeWheels';
import PageHeader from '@/components/_common/PageHeader';
import { BtnConfirm, BtnToggle, IconBtn } from '@/components/_common/buttons';
import { PopupBottom, PopupConfirm } from '@/components/_common/popups';
import { InputTextSingle, InputTextRange, CheckBox } from '@/components/_common/inputs';
import styles from './styles.css';
import Tooltip from '@/components/_common/Tooltip';
import Dropdown from '@/components/_common/Dropdown';

export default function NewStudyPage() {
	const [progress, setProgress] = useState(0);
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [active, setActive] = useState(true);
	const [isOpenBottomPopup, setIsOpenBottomPopup] = useState(false);
	const [isOpenConfirmPopup, setIsOpenConfirmPopup] = useState(false);

	const handleClick = () => {
		setActive((prev) => !prev);
		setDisabled((prev) => !prev);
		setIsOpenConfirmPopup(true);
	};
	const handleClickRightButton = () => {
		setIsOpenBottomPopup(true);
	};
	const handleClosePopupBottom = () => {
		setIsOpenBottomPopup(false);
	};
	const handleClosePopupConfirm = () => {
		setIsOpenConfirmPopup(false);
	};
	const [text, setText] = useState('');
	const handleInputText = (value: string) => {
		setText(value);
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prev) => (prev + 10) % 100);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	const [rangeStart, setRangeStart] = useState('');
	const [rangeEnd, setRangeEnd] = useState('');
	type RangeSetter = React.Dispatch<React.SetStateAction<string>>;
	type RangeInputHandler = (value: string) => void;
	// const _rangeHandler = (setter: RangeSetter) => (value: string) => {
	// 	console.log('page', value);
	// 	setter(value);
	// };
	// const handleInputRange = [
	// 	_rangeHandler(setRangeStart),
	// 	_rangeHandler(setRangeEnd),
	// ] as [RangeInputHandler, RangeInputHandler];
	const handleInputRange = [
		(value: string) => {
			console.log('start', value);
			setRangeStart(value);
		},
		(value: string) => {
			console.log('end', value);
			setRangeEnd(value);
		},
	] as [RangeInputHandler, RangeInputHandler];

	const [isChecked, setIsChecked] = useState(false);
	const handleInputCheckbox = (checked: boolean) => {
		console.log(checked);
		// setIsChecked(checked);
	};

	return (
		<>
			<PageHeader onBack={() => {}} title="새 스터디 만들기" progress={progress}>
				<IconBtn iconSrc="/ico/24/how_study.svg">
					<Tooltip type="bottomLeft">asdfasdf</Tooltip>
				</IconBtn>
				<IconBtn
					iconSrc="/ico/24/etc.svg"
					onClick={() => setIsOpenDropdown((prev) => !prev)}>
					<Dropdown
						type="bottomLeft"
						items={['수정하기', '삭제하기']}
						isOpen={isOpenDropdown}
					/>
				</IconBtn>
			</PageHeader>
			<main className={styles.main}>
				{/* <DateTimeWheels /> */}
				<InputTextSingle
					title="Single Line Text Field"
					value={text}
					isError={text === 'error'}
					onInput={handleInputText}
					subTextType="count"
					maxLength={10}
					errorMessage="똑바로 하세요"
					normalMessage="single line text field"
					style={{ margin: '16px 0' }}
				/>
				<InputTextRange
					title="Range Input Field"
					placeholder="냐이입력"
					value={[rangeStart, rangeEnd]}
					range={['20', '65']}
					onInput={handleInputRange}
					isError={[Number(rangeStart) > 10, Number(rangeEnd) < 10]}
					unit="세"
				/>
				<div style={{ display: 'flex' }}>
					<BtnToggle
						title="True"
						active={active}
						onClick={handleClick}
						className={styles.test}
					/>
					<BtnToggle
						title="False"
						active={!active}
						className={styles.test}
						onClick={handleClickRightButton}
					/>
				</div>
				<BtnConfirm
					title="확인"
					disabled={false}
					fixed={true}
					onClick={handleClosePopupBottom}
				/>

				<PopupBottom
					isOpen={isOpenBottomPopup}
					onClose={handleClosePopupBottom}
					className={styles.testPopup}>
					testes adasf
					<BtnConfirm
						title="닫기"
						disabled={false}
						fixed={false}
						onClick={handleClosePopupBottom}
					/>
				</PopupBottom>

				<PopupConfirm
					isOpen={isOpenConfirmPopup}
					title="TITLE"
					description="description"
					confirm={{ label: '확인', onClick: handleClosePopupConfirm }}
					cancel={{ label: '취소', onClick: handleClosePopupConfirm }}
					onClose={handleClosePopupConfirm}
				/>
			</main>
		</>
	);
}
