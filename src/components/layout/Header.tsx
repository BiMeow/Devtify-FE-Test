import { memo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IconBag, IconLogout, IconUsers } from '@/components/common/Icon';
import Link from 'next/link';
import { motion } from 'framer-motion';

let listNav = [
	{
		icon: <IconUsers />,
		href: '/',
	},
	{
		icon: <IconBag />,
		href: '/project',
	},
];

function Header({ ...props }) {
	const router = useRouter();
	const pathName = usePathname();

	return (
		<>
			<motion.header
				className={`Header flex flex-col items-center border-r border-gray2 py-[25px]`}
				initial={{ x: -100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
			>
				<div className="logo mb-[75px] px-[20px]">
					<img
						src="/images/logo.png"
						alt="Devtify Frontend Test Logo"
						className={`w-[47px]`}
						width={0}
						height={0}
						sizes="100vw"
					/>
				</div>

				<div className="listNav space-y-[16px]">
					{listNav?.map((item: any, index: number) => (
						<div
							className={`
							itemNav flexCenter relative aspect-1 w-[56px] cursor-pointer rounded-full bg-transparent px-[18px] text-[28px] text-gray5 duration-500 hover:text-primary6
							${pathName != '/' && index != 0 && pathName.includes(item.href) ? '!bg-primary2 text-primary6' : ''}
							${pathName == '/' && index == 0 ? '!bg-primary2 text-primary6' : ''}
							`}
							key={index}
						>
							{item.icon}
							<Link href={item.href} className="absFull" />
						</div>
					))}
				</div>

				<div className="auth flexCenter mt-auto flex-col gap-[25px] border-t border-gray2 px-[22px] pt-[25px]">
					<img
						src="/images/avatar.png"
						alt="Devtify Frontend Test Avatar"
						className={`aspect-1 w-[48px] rounded-full object-cover`}
						width={0}
						height={0}
						sizes="100vw"
					/>
					<div className="logout flexCenter aspect-1 w-[40px] cursor-pointer rounded-full border border-gray3 text-[20px] text-gray7 duration-300 hover:bg-gray3">
						<IconLogout />
					</div>
				</div>
			</motion.header>
		</>
	);
}

export default memo(Header);
