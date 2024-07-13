import { style } from '@vanilla-extract/css';
import { fadeIn } from '@/styles/keyframes';

export const main = style({
	height: '100vh',
	position: 'relative',
	overflow: 'hidden',
	display: 'flex',
	justifyContent: 'center',
});

export const contents = style({
	width: '100%',
	maxWidth: 720,
	height: 'calc(100% - 56px)',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start',
	gap: 36,
	marginTop: 60,
	padding: '28px 16px 128px',
	overflowY: 'scroll',
});

export const confirm = style({
	maxWidth: 720,
	width: 'calc(100% - 32px)',
});

// export const singleContent = style({
// 	width: '100%',
// 	height: 'auto',
// 	animation: `${fadeIn} 750ms`,
// });

const styles = {
	main,
	contents,
	confirm,
};

export default styles;
