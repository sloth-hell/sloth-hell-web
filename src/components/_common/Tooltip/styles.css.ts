import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, zIndex } from '@/styles/constants';

const tooltip = recipe({
	base: {
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		zIndex: zIndex.tooltip,
		cursor: 'default',
	},
	variants: {
		isOpen: {
			true: {
				opacity: 1,
			},
			false: {
				opacity: 0,
			},
		},
		position: {
			top: {
				bottom: '100%',
				marginBottom: 4,
				flexDirection: 'column-reverse',
			},
			bottom: {
				top: '100%',
				marginTop: 4,
				flexDirection: 'column',
			},
			left: {
				right: '100%',
				marginRight: 4,
				flexDirection: 'row-reverse',
			},
			right: {
				left: '100%',
				marginLeft: 4,
				flexDirection: 'row',
			},
		},
	},
});

const head = recipe({
	base: {
		width: 12,
		height: 10,
		position: 'relative',
		backgroundColor: colors.primary.red['02'],
		opacity: '80%',
		clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
	},
	variants: {
		position: {
			top: {
				transform: 'rotate(0deg)',
			},
			bottom: {
				transform: 'rotate(180deg)',
			},
			right: {
				transform: 'rotate(90deg)',
			},
			left: {
				transform: 'rotate(270deg)',
			},
		},
	},
});

const body = recipe({
	base: {
		padding: '8px 12px',
		borderRadius: 8,
		backgroundColor: colors.primary.red['02'],
		opacity: '80%',
		position: 'relative',
	},
	variants: {
		position: {
			top: {
				bottom: '25%',
			},
			bottom: {
				top: '25%',
			},
			left: {
				right: '25%',
			},
			right: {
				left: '25%',
			},
		},
	},
});

const styles = {
	tooltip,
	head,
	body,
};

export default styles;
