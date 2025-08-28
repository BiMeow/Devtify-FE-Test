'use client';
import Preloader from '@/components/common/Preloader';
import Header from '@/components/layout/Header';
import useDebounce from '@/plugins/hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

export default function DefaultLayout({ children, locale }: { children?: React.ReactNode; locale?: any }) {
	const { width } = useWindowSize();
	const debounceScreenWidth = useDebounce(width, 500);

	const [widthHeader, setwidthHeader] = useState(0);

	useEffect(() => {
		let header: any = document.querySelector('.Header');

		if (header) {
			setwidthHeader(header.offsetWidth);
		}
	}, [debounceScreenWidth]);

	return (
		<>
			{/* <Preloader /> */}

			<div className="mainPage relative flex h-dvh w-screen">
				{/* <Header /> */}
				<div className="pageContent h-dvh" style={{ width: `calc(100vw - ${widthHeader}px` }}>
					{children}
				</div>
				{/* <Footer /> */}
			</div>
		</>
	);
}
