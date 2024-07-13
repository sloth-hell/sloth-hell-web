import { useState } from 'react';
import clx from 'classnames';
import type { StaticImageData } from 'next/image';

import { IconBtn } from '@/components/_common';
import StepBase from '../StepBase';
import styles from './styles.css';

import SamplgeIcon from 'public/images/sample_btn_icon.png';

const BUTTON_DATA: GenderUIData[] = [
	{ title: '상관없음', iconSrc: SamplgeIcon },
	{ title: '남성', iconSrc: SamplgeIcon },
	{ title: '여성', iconSrc: SamplgeIcon },
];

type GenderUIData = GenderData & {
	iconSrc: StaticImageData;
};

export type GenderData = {
	title: '상관없음' | '남성' | '여성';
};

interface GenderProps {
	onInput?: (value: GenderData) => void;
}

export default function Gender({ onInput }: GenderProps) {
	const [indexSelected, setIndexSelected] = useState(-1);

	const handleClickLi = (event: React.MouseEvent<HTMLLIElement>) => {
		const _index = Number((event.currentTarget as HTMLLIElement).dataset.index);
		if (isNaN(_index)) return;
		setIndexSelected(_index);

		onInput && onInput(BUTTON_DATA[_index]);
	};

	return (
		<StepBase title="함께할 스터디원의 성별" largeTitle={true}>
			<ul className={styles.buttons}>
				{BUTTON_DATA.map(({ title, iconSrc }, index) => (
					<li
						className={styles.buttonContainer}
						onClick={handleClickLi}
						key={`gender-${index}`}
						data-index={index}>
						<IconBtn
							className={clx(styles.button, {
								[styles.selectedButton]: indexSelected === index,
							})}
							iconSrc={iconSrc}
							alt={title}>
							{title}
						</IconBtn>
					</li>
				))}
			</ul>
		</StepBase>
	);
}
