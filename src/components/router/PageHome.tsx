'use client';
import LayoutPageListManagement from '@/components/common/LayoutPageListManagement';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

function PageHome({ ...props }) {
	const router = useRouter();

	return (
		<>
			<LayoutPageListManagement title="Quản lý danh sách ABE" />
		</>
	);
}

export default memo(PageHome);
