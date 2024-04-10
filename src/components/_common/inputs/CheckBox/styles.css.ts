import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constants';

const wrapper = style({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	gap: 8,
	cursor: 'pointer',
});

const checkbox = style({
	all: 'unset',
	width: 20,
	height: 20,
	position: 'relative',
	borderRadius: 6,
	border: `1px solid ${colors.line['01']}`,
	'::after': {
		width: 12,
		height: 12,
		position: 'absolute',
		top: 4,
		left: 4,
		borderRadius: 3.5,
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
	wrapper,
	checkbox,
	label,
};

export default styles;
