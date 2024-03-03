import { style } from '@vanilla-extract/css';

export const main = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '0 16px',
	minHeight: '100vh',
});

export const description = style({
	display: 'inherit',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	zIndex: 2,
});

const test = style({
	margin: 12,
});

const styles = {
	main,
	test,
};

export default styles;
