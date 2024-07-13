import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constants';

const wrapper = style({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
});

const mainWrapper = style({
	width: '100%',
	height: 44,
	border: `1px solid ${colors.line['01']}`,
	borderRadius: 10,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

const select = style({
	all: 'unset',
	width: '100%',
	height: '100%',
	cursor: 'pointer',
	borderRadius: 'inherit',
	color: colors.basic.white,
	fontSize: 16,
	textAlign: 'center',
});

const styles = {
	wrapper,
	mainWrapper,
	select,
};

export default styles;
