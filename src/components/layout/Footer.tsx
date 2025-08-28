import { memo } from 'react';
import { useRouter } from 'next/navigation';

function Footer({ ...props }) {
	const router = useRouter();

	return (
		<>
			<footer className={`Footer`}>
				Footer
			</footer>
		</>
	);
}

export default memo(Footer);
