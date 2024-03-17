'use client';
import { useState } from 'react';
import DateTimeWheels from '@/components/DateTimeWheels';
import { BtnConfirm, BtnToggle } from '@/components/_common/buttons';
import { PopupBottom, PopupConfirm } from '@/components/_common/popups';
import { InputTextSingle, InputTextRange } from '@/components/_common/inputs';
import styles from './styles.css';

export default function NewStudyPage() {
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

	const [rangeStart, setRangeStart] = useState('');
	const [rangeEnd, setRangeEnd] = useState('');
	type RangeSetter = React.Dispatch<React.SetStateAction<string>>;
	type RangeInputHandler = (value: string) => void;
	const _rangeHandler = (setter: RangeSetter) => (value: string) => {
		console.log('page', value);
		setter(value);
	};
	const handleInputRange = [
		_rangeHandler(setRangeStart),
		_rangeHandler(setRangeEnd),
	] as [RangeInputHandler, RangeInputHandler];

	const [isChecked, setIsChecked] = useState(false);
	const handleInputCheckbox = (checked: boolean) => {
		console.log(checked);
		// setIsChecked(checked);
	};

	return (
		<main className={styles.main}>
			<DateTimeWheels />
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
				onInput={handleInputRange}
				range={['0세', '100세']}
				isError={[Number(rangeStart) > 10, Number(rangeEnd) < 10]}
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
	);
}
