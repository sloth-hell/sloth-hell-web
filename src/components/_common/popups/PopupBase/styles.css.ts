import { style } from '@vanilla-extract/css';
import { zIndex } from '@/styles/constants';

import { colors } from '@/styles/constants';

const backdrop = style({
	width: '100vw',
	height: '100vh',
	position: 'fixed',
	zIndex: zIndex.modal,
	background: colors.ui.dim,
	willChange: 'opacity',
	transition: 'opacity 100ms',
	opacity: 0,
});

const body = style({
	position: 'fixed',
	background: colors.bg['02'],
	zIndex: zIndex.modal + 1,
});

const openBackdrop = style({
	opacity: 1,
});

// const closed = style({});

const styles = {
	backdrop,
	body,
	openBackdrop,
};

export default styles;
