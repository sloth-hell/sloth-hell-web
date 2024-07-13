import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@/styles/constants';

const container = style({
	width: '100%',
	height: 'auto',
});

const header = style({
	width: '100%',
	textAlign: 'left',
	color: colors.gray['01'],
	marginBottom: 8,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

const title = recipe({
	base: {
		width: '100%',
		textAlign: 'left',
		color: colors.gray['01'],
	},
	variants: {
		type: {
			normal: { fontSize: 14 },
			large: { fontSize: 16 },
		},
	},
});

const containerInput = style({
	width: '100%',
	height: 48,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: 12,
});

const separater = style({});

const info = recipe({
	base: {
		fontSize: 14,
		marginTop: 8,
	},
	variants: {
		status: {
			normal: { color: colors.gray['03'] },
			focused: { color: colors.gray['03'] },
			error: { color: colors.system.error },
		},
	},
});

const styles = {
	container,
	header,
	containerInput,
	title,
	separater,
	info,
};

export default styles;
