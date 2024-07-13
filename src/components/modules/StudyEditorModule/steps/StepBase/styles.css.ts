import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { fadeIn } from '@/styles/keyframes';

const container = style({
	width: '100%',
	height: 'auto',
	animation: `${fadeIn} 750ms`,
});

const title = recipe({
	variants: {
		type: {
			normal: { marginBottom: 8 },
			large: { marginBottom: 12 },
		},
	},
});

const styles = {
	container,
	title,
};

export default styles;
