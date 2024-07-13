export const resizeTextArea = (element: HTMLTextAreaElement) => {
	element.style.setProperty('height', 'auto');
	element.style.setProperty('height', `${element.scrollHeight}px`);
};
