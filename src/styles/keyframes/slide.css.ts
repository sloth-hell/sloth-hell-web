import { keyframes } from '@vanilla-extract/css';

export const slideInVertical = keyframes({
	from: {
		transform: 'translateY(100%)',
	},
	to: {
		transform: 'translateY(0)',
	},
});

export const slideOutVertical = keyframes({
	from: {
		transform: 'translateY(0)',
	},
	to: {
		transform: 'translateY(100%)',
	},
});

export const slideInHorizontal = keyframes({
	from: {
		transform: 'translateX(100%)',
	},
	to: {
		transform: 'translateX(0)',
	},
});

export const slideOutHorizontal = keyframes({
	from: {
		transform: 'translateX(0)',
	},
	to: {
		transform: 'translateX(100%)',
	},
});
