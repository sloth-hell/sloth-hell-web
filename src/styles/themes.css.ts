import { createTheme } from '@vanilla-extract/css';

type Tokens = {
	[key: string]: string | Tokens;
};

const _tokenize = (colors: string[] | Tokens): { [key: string]: string } =>
	Array.isArray(colors)
		? colors.reduce(
				(acc, color, idx) => ({ ...acc, [String(idx + 1).padStart(2, '0')]: color }),
				{},
			)
		: colors;

export const _colors = {
	bg: _tokenize(['#1E1E1E', '#2A2B2E', '#3D3E42']),
	basic: {
		white: '#FFFFFF',
		black: '#1C1C1C',
	},
	primary: {
		red: _tokenize(['#FB495E', '#693A40']),
		orange: _tokenize(['#FF8856']),
		brown: _tokenize(['#342224']),
	},
	gradient: _tokenize([
		'linear-gradient(135deg, #FB495E 0%, #FF8856 100%)',
		'linear-gradient(135deg, #1E1E1E 0%, #342224 100%)',
	]),
	gray: _tokenize(['#F1F1F1', '#C0C0C0', '#989898', '#646464', '#353535']),
	line: {
		..._tokenize(['#747474', '#4F4F4F', '#353535']),
		gradient: _tokenize(['linear-gradient(135deg, #84474D 0%, #413027 100%']),
	},
	system: {
		error: '#E53030',
		complete: '#2EB05A',
	},
	ui: {
		toastpopup: 'rgba(#684448, 0.9)',
		dim: 'rgba(0, 0, 0, 0.5)',
	},
};

export const theme = createTheme({
	color: _colors,
});
