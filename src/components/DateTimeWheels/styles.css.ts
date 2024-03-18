import { style, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colors } from '@/styles/constants';

export const vars = {
	wheelY: createVar(),
};

export const container = style({
	width: 343,
	height: 176,
	position: 'relative',
	minWidth: 343,
	minHeight: 176,
	// margin: '0 8px',
	padding: '0 16px',
	display: 'grid',
	// 137px (24px) 40px (12px) 26px (12px) 26px
	gridTemplateColumns: '3fr 1fr 1fr 1fr',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	// gap: 12,
	border: `1px solid ${colors.line['01']}`,
	borderRadius: 8,
	overflow: 'hidden',
	transition: 'transform 100ms',
});

export const wheel = recipe({
	base: {
		// height: '100%',
		width: '100%',
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		touchAction: 'pan-y',
		WebkitTapHighlightColor: 'transparent',
		willChange: 'transform',
		transform: `translateY(${vars.wheelY})`,
	},
	variants: {
		type: {
			month: {},
			date: {},
			day: {
				// width: '50%',
			},
			meridiem: {},
			hour: {},
			minute: {},
		},
	},
});

export const item = recipe({
	base: {
		width: '100%',
		minHeight: 28,
		verticalAlign: 'middle',
		letterSpacing: -0.5,
		fontSize: 20,
		textAlign: 'center',
		color: colors.gray['03'] as string,
		userSelect: 'none',
	},
	variants: {
		type: {
			month: {
				'::after': { content: '' },
			},
			date: {
				'::after': { content: '' },
			},
			day: {
				// textAlign: 'left',
			},
			meridiem: {},
			hour: {},
			minute: {},
		},
		selected: {
			true: { fontWeight: 700, fontSize: 22, color: colors.gray['01'] as string },
		},
		bound: {
			true: { opacity: 0.4 },
		},
	},
});

export const dividers = style({
	height: '100%',
	width: 1,
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
});
export const highlight = style({
	width: 'auto',
	height: 44,
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	margin: 'auto 8px',
	background: 'linear-gradient(91deg, #2A2B2E 0%, rgba(53, 53, 53, 0.00) 100%)',
	borderRadius: 8,
	border: `1px solid ${colors.line['01']}`,
	zIndex: -1,
});

export const styles = {
	container,
	dividers,
	highlight,
};

export default styles;
