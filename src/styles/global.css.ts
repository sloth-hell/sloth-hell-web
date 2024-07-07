import { globalStyle, fontFace } from '@vanilla-extract/css';
import { colors } from '@/styles/constants';

const spocaSans = fontFace({
	src: 'url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css)',
});

globalStyle('html, body', {
	maxWidth: '100vw',
	// minHeight: '100vh',
	overflowX: 'hidden',
});

globalStyle('html', {
	'@media': {
		'(prefers-color-scheme: dark)': {
			colorScheme: 'dark',
		},
	},
});

globalStyle('body', {
	color: colors.gray['01'] as string,
	backgroundColor: colors.bg['01'] as string,
	fontFamily: spocaSans,
});

globalStyle('a', {
	color: 'inherit',
	textDecoration: 'none',
});

globalStyle('li, ul, ol', {
	all: 'unset',
});

globalStyle('*', {
	boxSizing: 'border-box',
	padding: 0,
	margin: 0,
});
