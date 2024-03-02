export type ColorMap = {
	bg: ColorMapSeq;
	basic: {
		white: string;
		black: string;
	};
	primary: {
		red: ColorMapSeq;
		orange: ColorMapSeq;
		brown: ColorMapSeq;
	};
	gradient: ColorMapSeq;
	gray: ColorMapSeq;
	line: ColorMapSeq & { gradient: ColorMapSeq };
	system: {
		error: string;
		complete: string;
	};
	ui: {
		toastpopup: string;
		dim: string;
	};
};
export type ColorMapSeqKey = '01' | '02' | '03' | '04' | '05';
export type ColorMapSeq = {
	[key in ColorMapSeqKey]?: string;
};

export type ZIndexMapKey = 'base' | 'modal' | 'confirm';
export type ZIndexMap = {
	[key in ZIndexMapKey]: number;
};
