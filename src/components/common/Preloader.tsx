import { motion } from 'framer-motion';
import { memo } from 'react';

import { useStorage } from '@/components/context/StorageProvider';

function Preloader({ ...props }) {
	const { isLoading } = useStorage();

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0,
				staggerChildren: 0,
			},
		},
	};

	const item = {
		hidden: { y: 0, fillOpacity: 0, pathLength: 0 },
		visible: {
			y: 0,
			pathLength: 1,
			fillOpacity: 1,
			transition: {
				duration: 1,
				pathLength: { duration: 1 },
				fillOpacity: { duration: 0.5, delay: 0.5 },
			},
		},
	};

	return (
		<>
			<div className={`Preloader`}>
				<div
					className={`
                    fixed inset-0 z-[9999] flex size-full h-[100dvh] w-screen origin-top items-center justify-center overflow-hidden duration-500
                    ${isLoading ? '' : 'scale-y-0 rounded-b-full opacity-0'}
                    `}
				>
					<div className="overlay absolute left-0 top-0 size-full bg-white"></div>

					<div className="flexCenter relative z-20 w-full">
						<img
							src="/images/logo.png"
							alt="Devtify Frontend Test Logo"
							className={`w-[200px]`}
							width={0}
							height={0}
							sizes="100vw"
						/>
					</div>
				</div>
			</div>

			<style jsx global>{`
				.Preloader {
					stroke: #883e70;
				}
			`}</style>
		</>
	);
}

export default memo(Preloader);
