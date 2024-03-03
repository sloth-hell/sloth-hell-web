import { style } from '@vanilla-extract/css';

const bottomBody = style({
	bottom: 0,
	left: 0,
	right: 0,
	padding: '0 16px',
	borderTopLeftRadius: 16,
	borderTopRightRadius: 16,
	transition: 'transform 200ms',
	transform: 'translateY(100%)',
	willChange: 'transform',
	height: 100,
});

const open = style({
	transform: 'translateY(0)',
});

const styles = {
	bottomBody,
	open,
};

export default styles;
