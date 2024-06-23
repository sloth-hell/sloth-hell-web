import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@/styles/constants';

const popupConfirm = style({
	width: 343,
	height: 'fit-content',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	margin: 'auto',
	padding: '0 16px',
	borderRadius: 16,
	opacity: 0,
	willChange: 'opacity',
	transition: 'opacity 200ms',
});

const open = style({
	opacity: 1,
});

const contents = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
});

const title = style({
	width: '100%',
	fontSize: 20,
	fontWeight: 700,
	color: colors.basic.white,
	marginTop: 32,
	textAlign: 'center',
});

const description = style({
	width: '100%',
	fontSize: 16,
	color: colors.gray['01'],
	marginTop: 16,
	textAlign: 'center',
});

const buttons = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: 28,
	borderTop: `1px solid ${colors.line['02']}`,
});

const button = recipe({
	base: {
		all: 'unset',
		width: '100%',
		height: 28,
		margin: '16px 0',
		fontSize: 16,
		fontWeight: 700,
		background: 'transparent',
		textAlign: 'center',
		selectors: {
			'& + &': {
				borderLeft: `1px solid ${colors.line['02']}`,
			},
		},
		cursor: 'pointer',
	},
	variants: {
		type: {
			confirm: {
				background: colors.primary.red['01'],
				backgroundClip: 'text',
				WebkitBackgroundClip: 'text',
				color: 'transparent',
			},
			cancel: {
				color: colors.basic.white,
			},
		},
	},
});

const styles = {
	popupConfirm,
	open,
	contents,
	title,
	description,
	buttons,
	button,
};

export default styles;
