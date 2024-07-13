import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, zIndex } from '@/styles/constants';
import { buttonBase } from '../styles.css';

const fixedArea = recipe({
	base: {
		width: '100%',
		height: 104,
		bottom: 0,
		zIndex: zIndex.confirm - 1,
		'::before': {
			width: '100%',
			display: 'inline-block',
			position: 'absolute',
			top: 0,
			background: 'linear-gradient(0deg, #1E1E1E 0%, #001E1E1E 100%)',
			content: '',
		},
		'::after': {
			width: '100%',
			display: 'inline-block',
			position: 'absolute',
			bottom: 0,
			content: '',
		},
	},
	variants: {
		fixed: {
			true: {
				position: 'absolute',
				'::before': {
					height: 28,
				},
				'::after': {
					height: 76,
					background: '#1E1E1E',
				},
			},
			false: {
				position: 'relative',
				'::before': {
					height: 0,
				},
				'::after': {
					height: 104,
					background: 'transparent',
				},
			},
		},
	},
});

const buttonConfirm = style([
	buttonBase,
	{
		fontWeight: 700,
		height: 52,
		position: 'absolute',
		top: 28,
		left: 0,
		right: 0,
		margin: '0 auto',
		borderRadius: 12,
		background: colors.primary.red['01'],
		zIndex: zIndex.confirm,
		willChange: 'background, color',
		transition: '100ms',
		cursor: 'pointer',
	},
]);

const disabled = style({
	background: colors.gray['04'],
	color: colors.gray['03'],
});

const styles = {
	buttonBase,
	buttonConfirm,
	fixedArea,
	disabled,
};

export default styles;
