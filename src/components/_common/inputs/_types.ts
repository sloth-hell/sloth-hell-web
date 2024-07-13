export type InputTextEvent = {
	target?: HTMLInputElement;
	nativeEvent: Event;
};
export type InputTextInputEvent = InputTextEvent & {
	value: string;
};

export type InputTextEventHandler<T> = (value: T) => void;
export type InputTextInputEventHandler = InputTextEventHandler<InputTextInputEvent>;
export type InputTextFocusEventHandler = InputTextEventHandler<InputTextEvent>;
export type InputTextBlurEventHandler = InputTextEventHandler<InputTextEvent>;
