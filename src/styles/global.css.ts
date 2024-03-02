import { globalStyle, fontFace } from '@vanilla-extract/css';
import { _colors } from './themes.css';

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
	color: _colors.gray['01'],
	backgroundColor: _colors.bg['01'],
	fontFamily: spocaSans,
});

globalStyle('a', {
	color: 'inherit',
	textDecoration: 'none',
});

globalStyle('*', {
	boxSizing: 'border-box',
	padding: 0,
	margin: 0,
});
