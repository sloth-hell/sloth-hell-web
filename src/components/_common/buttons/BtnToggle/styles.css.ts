import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { buttonBase } from '../styles.css';
import { colors } from '@/styles/constants';

const btnToggle = recipe({
	base: [
		buttonBase,
		{
			width: 109,
			height: 103,
			borderRadius: 10,
			borderWidth: 1,
			borderStyle: 'solid',
			willChange: 'border-color',
			transition: 'border-color 100ms',
			fontSize: 16,
		},
	],
	variants: {
		active: {
			true: {
				borderColor: colors.gray['01'],
				fontWeight: 700,
				color: colors.primary.red['01'],
			},
			false: {
				borderColor: colors.line['01'],
				fontWeight: 500,
				color: colors.basic.white,
			},
		},
	},
});

const image = style({
	width: 48,
	height: 48,
	borderRadius: 12,
	marginTop: 12,
});

// const title = style({});

const styles = {
	btnToggle,
	image,
	// title,
};

export default styles;
