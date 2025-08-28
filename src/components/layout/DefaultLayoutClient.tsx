'use client';

import { ConfigProvider, theme } from 'antd';
import React from 'react';

export default function DefaultLayoutClient({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,
				}}
			>
				{children}
			</ConfigProvider>
		</>
	);
}
