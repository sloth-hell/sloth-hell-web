import { useContext, type Context } from 'react';
import { DataContext, StateContext } from '../contexts';
import type { WheelDataType, WheelStateType, WheelType } from '../_types';

// const _useWheelContext = (
// 	context: Context<(WheelDataType | null | (WheelStateType | null)>,
// ) => {
// 	const value = useContext(context);
// 	if (!value) {
// 		throw new Error('Must be used within a Provider');
// 	}
// 	return (type: WheelType) => value[type];
// };

export const useWheelDataContext = (type: WheelType) => {
	const value = useContext(DataContext);
	if (!value) {
		throw new Error('Must be used within a Provider');
	}
	return value[type];
};

export const useWheelStateContext = (type: WheelType) => {
	const value = useContext(StateContext);
	if (!value) {
		throw new Error('Must be used within a Provider');
	}
	return value[type];
};
