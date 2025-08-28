import { useEffect, useRef, useState } from 'react';

function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	const timeoutRef = useRef<number | null>(null);

	useEffect(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		if (value !== true) {
			timeoutRef.current = window.setTimeout(() => {
				setDebouncedValue(value);
			}, delay);
		} else {
			setDebouncedValue(value);
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [value, delay, timeoutRef]);

	return debouncedValue;
}

export default useDebounce;
