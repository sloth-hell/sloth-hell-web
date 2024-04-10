import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, zIndex } from '@/styles/constants';

const _fromBottomToTop = keyframes({
	'0%': {
		transform: 'scaleY(0)',
		transformOrigin: 'bottom',
	},
	'100%': {
		transform: 'scaleY(1)',
	},
});

const _fromTopToBottom = keyframes({
	'0%': {
		transform: 'scaleY(0)',
		transformOrigin: 'top',
	},
	'100%': {
		transform: 'scaleY(1)',
	},
});

const _fadeIn = keyframes({
	'0%': {
		opacity: 0,
	},
	'100%': {
		opacity: 1,
	},
});

const dropdown = recipe({
	base: {
		position: 'absolute',
		color: colors.gray['01'],
		padding: '8px 0',
		border: `1px solid ${colors.line['03']}`,
		borderRadius: 8,
		background: colors.bg['02'],
		zIndex: zIndex.dropdown,
		// animation: `${_fadeIn} 150ms ease-in-out`,
		willChange: 'opacity, visibility',
		transition: '150ms',
	},
	variants: {
		status: {
			open: {
				opacity: 1,
			},
			// fadeOut: {
			// 	opacity: 0,
			// },
			hidden: {
				opacity: 0,
				visibility: 'hidden',
			},
		},
		position: {
			topLeft: {
				marginBottom: 16,
				bottom: '100%',
				right: 0,
			},
			topRight: {
				marginBottom: 16,
				bottom: '100%',
				left: 0,
			},
			bottomLeft: {
				marginTop: 16,
				top: '100%',
				right: 0,
			},
			bottomRight: {
				marginTop: 16,
				top: '100%',
				left: 0,
			},
		},
	},
});

const item = style({
	all: 'unset',
	width: 96,
	height: 40,
	margin: '0 12px',
	padding: '0 8px',
	boxSizing: 'border-box',
	fontSize: 16,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	cursor: 'pointer',
	selectors: {
		'& + &': {
			borderTop: `1px solid ${colors.line['03']}`,
		},
	},
});

const button = style({});

const styles = {
	dropdown,
	item,
	button,
};

export default styles;
