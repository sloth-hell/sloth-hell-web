import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constants';

const group = style({
	width: '100%',
});

const itemWrapper = style({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	gap: 8,
	cursor: 'pointer',
	selectors: {
		'& + &': {
			marginTop: 12,
		},
	},
});

const radio = style({
	all: 'unset',
	width: 20,
	height: 20,
	position: 'relative',
	borderRadius: 10,
	border: `1px solid ${colors.line['01']}`,
	'::after': {
		width: 12,
		height: 12,
		position: 'absolute',
		top: 4,
		left: 4,
		borderRadius: 6,
		content: '',
		willChange: 'background-color',
		transition: '100ms',
	},
	selectors: {
		'&:checked::after': {
			backgroundColor: colors.primary.red['01'],
		},
	},
});

const label = style({
	fontSize: 16,
	color: colors.gray['01'],
});

const styles = {
	group,
	itemWrapper,
	radio,
	label,
};

export default styles;
