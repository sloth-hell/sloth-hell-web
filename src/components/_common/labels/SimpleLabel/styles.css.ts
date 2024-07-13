import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@/styles/constants';

const label = recipe({
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

const styles = {
	label,
};

export default styles;
