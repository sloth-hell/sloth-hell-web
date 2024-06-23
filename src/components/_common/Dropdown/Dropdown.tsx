import { use, useEffect, useMemo } from 'react';
import clx from 'classnames';
import styles from './styles.css';

export type DropdownItem =
	| string
	| {
			label: string;
			onClick?: React.MouseEventHandler;
			closeOnClick?: boolean;
	  };

export interface DropdownProps {
	items: DropdownItem[];
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
	onChange?: (isOpen: boolean) => void;
	type?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
	className?: string;
	style?: React.CSSProperties;
}

export default function Dropdown({
	items,
	isOpen,
	onOpen,
	onClose,
	type,
	className,
	style,
}: DropdownProps) {
	const _items = useMemo(
		() => items.map((item) => (typeof item === 'string' ? { label: item } : item)),
		[items],
	);
	const position = useMemo(() => type ?? 'bottomLeft', [type]);

	return (
		<ul
			className={clx(
				styles.dropdown({ position, status: isOpen ? 'open' : 'hidden' }),
				className,
			)}
			style={style}>
			{_items.map((item, index) => (
				<li className={styles.item} onClick={item.onClick} key={`dropdown-${index}`}>
					{item.label}
				</li>
			))}
		</ul>
	);
}
