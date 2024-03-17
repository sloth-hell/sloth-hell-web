import { style, createVar } from '@vanilla-extract/css';
import { colors } from '@/styles/constants';

export const vars = {
	progressPercent: createVar(),
};

const container = style({
	position: 'fixed',
	width: '100%',
	height: 'auto',
	top: 0,
	left: 0,
	background: colors.bg['01'],
});

const body = style({
	height: 56,
	margin: '0 16px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});

const bodyLeft = style({
	height: 26,
	display: 'flex',
	alignItems: 'center',
});

const bodyRight = style({
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	gap: 16,
});

const back = style({
	all: 'unset',
	width: 24,
	height: 24,
	marginRight: 4,
	cursor: 'pointer',
});

const backIcon = style({
	width: 24,
	height: 24,
});

const title = style({
	fontSize: 18,
	color: colors.basic.white,
});

const progressBar = style({
	width: '100%',
	height: 4,
	background: colors.line['02'],
});

const progressBarActive = style({
	width: '100%',
	height: '100%',
	transform: `scaleX(${vars.progressPercent})`,
	transformOrigin: 'left',
	willChange: 'transform',
	transition: 'transform 150ms',
	borderRadius: 2,
	background: colors.gradient['01'],
});

const styles = {
	container,
	body,
	bodyLeft,
	bodyRight,
	back,
	backIcon,
	title,
	progressBar,
	progressBarActive,
};

export default styles;
