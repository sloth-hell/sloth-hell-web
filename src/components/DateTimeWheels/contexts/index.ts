import { createContext } from 'react';
import type { WheelDataType, WheelStateType } from '../_types';

export const DataContext = createContext<WheelDataType | null>(null);
export const StateContext = createContext<WheelStateType | null>(null);
