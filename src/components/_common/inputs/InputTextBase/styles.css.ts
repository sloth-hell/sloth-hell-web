import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { fadeIn } from '@/styles/keyframes';
import { colors } from '@/styles/constants';

const container = recipe({
	base: {
		width: '100%',
		height: 48,
		padding: '0 12px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderStyle: 'solid',
		borderRadius: 8,
		borderWidth: 1,
		willChange: 'border-color',
		transition: '100ms',
	},
	variants: {
		status: {
			normal: { borderColor: colors.line['03'] },
			focused: { borderColor: colors.line['01'] },
			error: { borderColor: colors.system.error },
		},
	},
});

const input = style({
	all: 'unset',
	width: '100%',
	height: '100%',
	boxSizing: 'border-box',
	fontSize: 16,
	'::placeholder': {
		color: colors.gray['03'],
		fontSize: 16,
	},
	'::after': {
		content: '세',
	},
});

const subText = style({
	fontSize: 14,
	color: colors.gray['03'],
	margin: '0 4px',
});

const delBtn = style({
	all: 'unset',
	height: 20,
	width: 20,
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	animation: `${fadeIn} 150ms`,
});

const styles = {
	container,
	input,
	subText,
	delBtn,
};

export default styles;
