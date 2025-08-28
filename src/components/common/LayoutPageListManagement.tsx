import HeaderIconButton from '@/components/common/HeaderIconButton';
import {
	IconAddMore,
	IconArrow,
	IconDecoStar,
	IconDownload,
	IconEdit,
	IconFilter,
	IconHide,
	IconMinimalArrow,
	IconPlus,
	IconRefresh,
	IconSearch,
	IconSetting,
	IconShare,
	IconSort,
	IconTable,
} from '@/components/common/Icon';
import ListItemMember from '@/components/common/ListItemData';
import { useStorage } from '@/components/context/StorageProvider';
import Icon from '@ant-design/icons';
import { notification } from 'antd';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

function LayoutPageListManagement({ ...props }: any) {
	const router = useRouter();

	const loaderRef = useRef<HTMLDivElement | null>(null);

	const { width, height } = useWindowSize();

	const { dataOrigin, setDataOrigin, dataVisible, setDataVisible } = useStorage();

	const [heightHeader, setHeightHeader] = useState(0);
	const [count, setCount] = useState(20); // số item hiển thị ban đầu

	const getData = async () => {
		try {
			const Apicall: any = await axios({
				method: 'get',
				url: 'https://microsoftedge.github.io/Demos/json-dummy-data/5MB.json',
			});
			const res: any = Apicall.data;
			if (res) {
				setDataOrigin(res);
			}
		} catch (error) {
			notification.warning({ message: 'Somthing wrong!' });
		}
	};

	useEffect(() => {
		getData();

		let header: any = document.querySelector('.LayoutPageListManagement .header');

		if (header) {
			setHeightHeader(header.offsetHeight);
		}

		return () => {};
	}, []);

	useEffect(() => {
		if (dataOrigin.length > 0) {
			setDataVisible(dataOrigin.slice(0, count));
		}
	}, [count, dataOrigin]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && count < dataOrigin.length) {
					setCount((prev) => prev + 20); // load thêm 20 item
				}
			},
			{ threshold: 1 }
		);

		if (loaderRef.current) observer.observe(loaderRef.current);
		return () => {
			if (loaderRef.current) observer.unobserve(loaderRef.current);
		};
	}, [count, dataOrigin]);

	return (
		<>
			<motion.div
				className={`LayoutPageListManagement relative h-full`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<div className="header flex justify-between p-[15px]">
					<div className="c1 flex items-center">
						<div className="iconBack cursor-pointer text-[21px] text-black hover:text-red">
							<IconArrow />
						</div>
						<div className="iconTable cursor-pointer text-[21px] text-[#858585] hover:text-red">
							<IconTable />
						</div>
						<input
							type="text"
							defaultValue={'Table Name'}
							id="tableName"
							className="cusInput w-[100px] text-center"
						/>
						<label htmlFor="tableName">
							<div className="iconEdit cursor-pointer text-[12px] text-[#B6B6B6] hover:text-red">
								<IconEdit />
							</div>
						</label>
					</div>

					<div className="c2 flex items-center gap-[12px]">
						<div className="addRow group flex cursor-pointer items-center gap-[5px] rounded-[10px] border border-[#E6E9EB] bg-[#F9F9F9] p-[10px] font-medium duration-300 hover:bg-green hover:text-white">
							<IconAddMore className="text-[12px] text-[#B6B6B6] duration-300 group-hover:text-white" />
							<p>Add row</p>
						</div>
						<HeaderIconButton text="Filter" icon={<IconFilter />} />
						<HeaderIconButton text="Sort" icon={<IconSort />} />
						<HeaderIconButton text="Search" icon={<IconSearch />} />
						<HeaderIconButton text="Fields" icon={<IconHide />} />
						<div className="h-[20px] w-[1px] bg-black"></div>
						<IconRefresh className="cursor-pointer text-[12px] text-black duration-300 hover:text-green" />
						<IconDownload className="cursor-pointer text-[12px] text-black duration-300 hover:text-green" />
						<IconShare className="cursor-pointer text-[12px] text-black duration-300 hover:text-green" />
						<IconSetting className="cursor-pointer text-[12px] text-black duration-300 hover:text-green" />
						<div className="action group flex cursor-pointer items-center gap-[5px] rounded-[10px] border border-[#E6E9EB] bg-[#F9F9F9] p-[10px] font-medium duration-300 hover:bg-green hover:text-white">
							<p>Action</p>
							<IconMinimalArrow className="text-[12px] text-[#B6B6B6] duration-300 group-hover:text-white" />
						</div>
						<div className="btnGradient group flex cursor-pointer items-center gap-[5px] rounded-[10px] bg-black p-[10px] font-medium text-white duration-300">
							<IconDecoStar className="text-[16px]" />
							<p>Ask AI</p>
						</div>
					</div>
				</div>

				<div className="wrapContent" style={{ height: `calc(100% - ${heightHeader}px)` }}>
					<div className="listItem h-full overflow-auto" data-lenis-prevent>
						<ListItemMember dataVisible={dataVisible} />

						{count < dataOrigin.length ? (
							<div ref={loaderRef} className="p-4 text-center">
								Loading more...
							</div>
						) : (
							<div className="addrow group flex cursor-pointer items-center gap-[5px] rounded-[10px] p-[10px] font-medium duration-300 hover:text-green">
								<div className="icon text-[12px] text-[#B6B6B6] duration-300 group-hover:text-green">
									<IconPlus />
								</div>
								<p>Add row</p>
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default memo(LayoutPageListManagement);
