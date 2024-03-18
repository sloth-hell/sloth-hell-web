import { style } from '@vanilla-extract/css';

const iconBtn = style({
	all: 'unset',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',
	position: 'relative',
});

const icon = style({});

const styles = {
	iconBtn,
	icon,
};

export default styles;
