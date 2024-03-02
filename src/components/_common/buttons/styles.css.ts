import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, zIndex } from '@/styles/constants';

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

const button = recipe({
	base: {
		all: 'unset',
		borderRadius: 12,
		// margin: '28px 16px 12px',
		fontSize: 16,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	variants: {
		confirm: {
			true: {
				maxWidth: 343,
				height: 52,
				position: 'absolute',
				top: 28,
				left: 0,
				right: 0,
				margin: '0 auto',
				background: colors.primary.red['01'],
				zIndex: zIndex.confirm,
			},
		},
		line: {},
	},
});

const active = style({});

// const areaGradient = style({
// 	height: 28,
// 	position: 'fixed',
// 	top: 0,
// 	background: 'linear-gradient(180deg, #1E1E1E 0%, rgba(#1E1E1E, 0) 100%)',
// });

const styles = {
	button,
	fixedArea,
};

export default styles;
