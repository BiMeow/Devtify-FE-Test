import { memo } from 'react';
import { useRouter } from 'next/navigation';

function SectionHomeAbout({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionHomeAbout secSpacing`}>
				SectionHomeAbout
			</div>
		</>
	);
}

export default memo(SectionHomeAbout);
