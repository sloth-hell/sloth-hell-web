import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@/styles/constants';

const container = style({
	width: '100%',
	height: 'auto',
});

const title = recipe({
	base: {
		width: '100%',
		textAlign: 'left',
		color: colors.gray['01'],
		marginBottom: 8,
	},
	variants: {
		type: {
			normal: { fontSize: 14 },
			large: { fontSize: 16 },
		},
	},
});

const info = recipe({
	base: {
		fontSize: 14,
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
	title,
	info,
};

export default styles;
