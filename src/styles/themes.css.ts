import { createTheme } from '@vanilla-extract/css';

type Tokens = {
	[key: string]: string | Tokens;
};

const _tokenize = (colors: string[] | Tokens): Tokens =>
	Array.isArray(colors)
		? colors.reduce(
				(acc, color, idx) => ({ ...acc, [String(idx + 1).padStart(2, '0')]: color }),
				{},
			)
		: colors;

const _colors = {
	bg: _tokenize(['#1E1E1E', '#2A2B2E', '#3D3E42']),
	basic: {
		white: '#FFFFFF',
		black: '#1C1C1C',
	},
	primary: {
		red: '#FB495E',
		orange: '#FF8856',
		brown: '#342224',
	},
	gradient: {
		'01': 'linear-gradient(135deg, #FB495E 0%, #FF8856 100%)',
	},
	gray: _tokenize(['#F1F1F1', '#C0C0C0', '#989898', '#646464', '#353535']),
	line: _tokenize(['#747474']),
	system: {
		error: '#E53030',
		complete: '#2EB05A',
	},
};

export const theme = createTheme({
	color: _colors,
});
