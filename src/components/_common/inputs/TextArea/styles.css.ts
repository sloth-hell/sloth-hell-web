import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@/styles/constants';

const container = recipe({
	base: {
		width: '100%',
		height: 'auto',
		position: 'relative',
		boxSizing: 'border-box',
		padding: '14px 12px',
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
		},
	},
});

const textArea = style({
	all: 'unset',
	width: '100%',
	minHeight: 'calc(100% - 22px)',
	fontSize: 16,
	lineHeight: 1.5,
	'::placeholder': {
		color: colors.gray['03'],
		fontSize: 16,
	},
});

const count = style({
	position: 'relative',
	width: '100%',
	height: 22,
	right: 0,
	bottom: 0,
	fontSize: 14,
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'flex-end',
	color: colors.gray['03'],
});

const styles = {
	container,
	textArea,
	count,
};

export default styles;
