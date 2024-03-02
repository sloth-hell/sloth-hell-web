import { useState, useEffect, useRef, type SetStateAction, type Dispatch } from 'react';

import type { WheelType } from '../_types';
import { item } from '../styles.css';

export interface UseWheelTouchOptions {
	type?: WheelType;
	// setSelectedIdx: Dispatch<SetStateAction<number>>;
}

export type WheelTouchState = null | {
	startY: number;
	lastY: number;
	lastTimeStamp: number;
	velocity?: number;
	acceleration?: number;
};

const DUMP_RATIO = 0.25;
const DUMP_INTERVAL = 50;
const MIN_EXIT_VELOCITY = 3;

export const useWheelTouch = <T extends HTMLElement>({}: UseWheelTouchOptions = {}) => {
	const ref = useRef<T>(null);

	// const [startTouchEvent, setStartTouchEvent] = useState<TouchEvent | null>(null);
	// const [velocity, setVelocity] = useState<number | null>(null);
	// const [acc, setAcc] = useState<number | null>(null);

	const [touchState, setTouchState] = useState<WheelTouchState>(null);
	const [y, setY] = useState(0);

	const [wheelHeight, setWheelHeight] = useState(0);
	const [wheelItemHeight, setWheelItemHeight] = useState(0);

	const [selectedItemIdx, setSelectedItemIdx] = useState(0);

	// const refs = {
	// 	// container: useRef<HTMLDivElement>(null),
	// 	month: useRef<HTMLDivElement>(null),
	// 	date: useRef<HTMLDivElement>(null),
	// 	day: useRef<HTMLDivElement>(null),
	// 	meridiem: useRef<HTMLDivElement>(null),
	// 	hour: useRef<HTMLDivElement>(null),
	// 	minute: useRef<HTMLDivElement>(null),
	// };

	const [timerId, setTimerId] = useState<NodeJS.Timeout>();
	// const dumpExitVelocity = useCallback(() => {
	// 	console.log('&&& interval', touchState?.velocity);
	// 	if (
	// 		touchState?.velocity &&
	// 		Math.abs(touchState.velocity) >= MIN_EXIT_VELOCITY / DUMP_RATIO
	// 	) {
	// 		const veolocity = touchState?.velocity as number;
	// 		setY((prev) => (prev += veolocity));
	// 		setTouchState((prev) => {
	// 			if (!prev) {
	// 				clearInterval(timerId);
	// 				setTimerId(undefined);
	// 				return prev;
	// 			}

	// 			return {
	// 				...prev,
	// 				lastY: y,
	// 				velocity: (prev.velocity as number) * DUMP_RATIO,
	// 			};
	// 		});
	// 	} else {
	// 		clearInterval(timerId);
	// 		setTimerId(undefined);
	// 		setY((prev) => Math.round(prev / wheelItemHeight) * wheelItemHeight);
	// 	}
	// }, [timerId, touchState, wheelItemHeight, y]);

	useEffect(() => {
		console.log(wheelItemHeight);
	}, [wheelItemHeight]);

	useEffect(() => {
		const { current } = ref;

		if (!current) return;

		if (current.children.length < 2) {
			return;
		}

		const childrenAt = (index: number) => current.children[index] as HTMLElement;
		setWheelItemHeight(childrenAt(1).offsetTop - childrenAt(0).offsetTop);
		console.log(
			'&&& wheel height:',
			current.clientHeight,
			childrenAt(1).offsetTop - childrenAt(0).offsetTop,
		);
	}, [ref]);

	useEffect(() => {
		const { current } = ref;

		if (!current) {
			return;
		}

		if (current.children.length < 2) {
			return;
		}

		setWheelHeight(current.clientHeight);

		const childrenAt = (index: number) => current.children[index] as HTMLElement;
		setWheelItemHeight(childrenAt(1).offsetTop - childrenAt(0).offsetTop);

		setY(0);

		console.log(
			'&&& wheel height:',
			current.clientHeight,
			childrenAt(1).offsetTop - childrenAt(0).offsetTop,
		);
	}, [ref.current?.clientHeight]);

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const { current } = ref;

		// const _handleTouchStart = handleTouchStart(touchState);
		// const _handleTouchEnd = handleTouchEnd(touchState);
		// const _handleTouchCancel = handleTouchCancle(touchState);
		// const _handleTouchMove = handleTouchMove(touchState);
		const handleTouchStart = (event: TouchEvent) => {
			console.log('touchstart', event.touches[0].clientX);
			// setStartTouchEvent(event);
			const { touches, timeStamp } = event;
			const { clientY } = touches[0];

			setTouchState({
				startY: clientY,
				lastY: clientY,
				lastTimeStamp: timeStamp,
			});
		};
		const handleTouchEnd = (event: TouchEvent) => {
			let _velocity = touchState?.velocity as number;
			const timerId = setInterval(() => {
				if (Math.abs(_velocity) >= MIN_EXIT_VELOCITY / DUMP_RATIO) {
					setY((prev) => (prev += _velocity));
					setTouchState((prev) => {
						if (!prev) {
							clearInterval(timerId);
							return prev;
						}

						_velocity = prev.velocity as number;

						return {
							...prev,
							lastY: y,
							velocity: (prev.velocity as number) * DUMP_RATIO,
						};
					});
				} else {
					clearInterval(timerId);
					setY((prev) => {
						return (
							Math.round((prev - wheelItemHeight / 2) / wheelItemHeight) *
								wheelItemHeight +
							wheelItemHeight / 2
						);
					});
				}
			}, DUMP_INTERVAL);
			// if (
			// 	touchState?.velocity &&
			// 	Math.abs(touchState.velocity) >= MIN_EXIT_VELOCITY / DUMP_RATIO
			// ) {
			// 	// setTimerId(setInterval(dumpExitVelocity, DUMP_INTERVAL));
			// 	let _velocity = touchState?.velocity as number;
			// 	const timerId = setInterval(() => {
			// 		if (Math.abs(_velocity) >= MIN_EXIT_VELOCITY / DUMP_RATIO) {
			// 			setY((prev) => (prev += _velocity));
			// 			setTouchState((prev) => {
			// 				if (!prev) {
			// 					clearInterval(timerId);
			// 					return prev;
			// 				}

			// 				_velocity = prev.velocity as number;

			// 				return {
			// 					...prev,
			// 					lastY: y,
			// 					velocity: (prev.velocity as number) * DUMP_RATIO,
			// 				};
			// 			});
			// 		} else {
			// 			clearInterval(timerId);
			// 			setY((prev) => Math.round(prev / wheelItemHeight) * wheelItemHeight);
			// 		}
			// 	}, DUMP_INTERVAL);
			// } else {
			// 	console.log('&&& SLOW');
			// 	setY((prev) => Math.round(prev / wheelItemHeight) * wheelItemHeight);
			// }
		};
		const handleTouchCancel = (event: TouchEvent) => {
			console.log('touchcancel', event.touches[0].clientX);
		};
		const handleTouchMove = (event: TouchEvent) => {
			if (typeof touchState?.startY !== 'number') {
				return;
			}

			const { touches, timeStamp } = event;
			const { clientY } = touches[0];

			setTouchState((prev) => {
				if (!prev) {
					return prev;
				}

				const { lastY, lastTimeStamp } = prev;

				return {
					...prev,
					lastY: clientY,
					velocity: ((clientY - lastY) / (timeStamp - lastTimeStamp)) * 1000,
				} as WheelTouchState;
			});
			setY((prev) => prev + clientY - touchState.lastY);

			// console.log('&&& touch Y diff:', event.touches[0].clientY - startY, event);
		};

		current.addEventListener('touchstart', handleTouchStart);
		current.addEventListener('touchend', handleTouchEnd);
		current.addEventListener('touchcancel', handleTouchCancel);
		current.addEventListener('touchmove', handleTouchMove);

		return () => {
			current.removeEventListener('touchstart', handleTouchStart);
			current.removeEventListener('touchend', handleTouchEnd);
			current.removeEventListener('touchcancel', handleTouchCancel);
			current.removeEventListener('touchmove', handleTouchMove);
		};
	}, [ref, touchState, wheelItemHeight]);

	useEffect(() => {
		const numItems = wheelItemHeight / wheelHeight;
		setSelectedItemIdx(Math.floor((numItems - 1) / 2 - y / wheelItemHeight));
		console.log(Math.floor((numItems - 1) / 2 - y / wheelItemHeight));
	}, [y, wheelItemHeight, wheelHeight]);

	return { ref, y, itemHeight: wheelItemHeight };
};
