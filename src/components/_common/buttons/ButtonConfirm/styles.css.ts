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
		':before': {
			width: '100%',
			display: 'inline-block',
			position: 'absolute',
			top: 0,
			background: 'linear-gradient(0deg, #1E1E1E 0%, #001E1E1E 100%)',
			content: '',
		},
		':after': {
			width: '100%',
			display: 'inline-block',
			position: 'absolute',
			bottom: 0,
			background: '#1E1E1E',
			content: '',
		},
	},
	variants: {
		fixed: {
			true: {
				position: 'absolute',
				':before': {
					height: 28,
				},
				':after': {
					height: 76,
				},
			},
			false: {
				position: 'relative',
				':before': {
					height: 0,
				},
				':after': {
					height: 104,
				},
			},
		},
	},
});

const buttonConfirm = style([
	buttonBase,
	{
		fontWeight: 700,
		maxWidth: 343,
		height: 52,
		position: 'absolute',
		top: 28,
		left: 0,
		right: 0,
		margin: '0 auto',
		borderRadius: 12,
		background: colors.primary.red['01'],
		zIndex: zIndex.confirm,
	},
]);

const styles = {
	buttonBase,
	buttonConfirm,
	fixedArea,
};

export default styles;
