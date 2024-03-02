import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { buttonBase } from '../styles.css';

const butttonImage = recipe({
	base: [
		buttonBase,
		{
			width: 109,
			height: 103,
			borderRadius: 10,
		},
	],
});

const image = style({
	width: 48,
	height: 48,
	borderRadius: 12,
	marginTop: 12,
});

const title = style({});

const styles = {
	butttonImage,
	image,
	title,
};

export default styles;
