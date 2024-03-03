'use client';

import { useState } from 'react';
import DateTimeWheels from '@/components/DateTimeWheels';
import { BtnConfirm, BtnToggle } from '@/components/_common/buttons';
import { PopupBottom, PopupConfirm } from '@/components/_common/popups';
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

	return (
		<main className={styles.main}>
			<DateTimeWheels />
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
