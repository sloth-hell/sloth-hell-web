import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constants';

const container = style({
	width: '100%',
});

const title = style({
	marginBottom: 12,
});

const buttons = style({
	display: 'flex',
	justifyContent: 'center',
	gap: 8,
});

const buttonContainer = style({
	width: '100%',
	height: 103,
});

const button = style({
	width: '100%',
	height: '100%',
	borderRadius: 10,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	border: `1px solid ${colors.line['01']}`,
	gap: 8,
	fontSize: 16,
	color: colors.basic.white,
	willChange: 'border-color, color, font-weight',
	transition: '100ms',
});

const selectedButton = style({
	border: `1px solid ${colors.gray['01']}`,
	fontWeight: 'bold',
	color: colors.primary.red['01'],
});

const styles = {
	container,
	title,
	buttons,
	buttonContainer,
	button,
	selectedButton,
};

export default styles;
