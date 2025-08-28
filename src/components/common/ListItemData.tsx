import ItemData from '@/components/common/ItemData';
import { useStorage } from '@/components/context/StorageProvider';
import { memo } from 'react';

function ListItemData({ ...props }: any) {
	const { dataVisible } = useStorage();
	
	return (
		<>
			<div className={`ListItemData border-l border-t border-[#E5E5E5]`}>
				{dataVisible?.length ? (
					<>
						<div className="head grid grid-cols-[50px_160px_300px_160px_180px_180px_70px_180px] font-medium">
							<div className="itemTableHeading">STT</div>
							<div className="itemTableHeading">Id</div>
							<div className="itemTableHeading">Bio</div>
							<div className="itemTableHeading">Name</div>
							<div className="itemTableHeading">Language</div>
							<div className="itemTableHeading">Version</div>
							<div className="itemTableHeading">State</div>
							<div className="itemTableHeading">Created Date</div>
						</div>
						<div className="list">
							{dataVisible?.map((item: any, index: number) => (
								<div className="itemData" key={index}>
									<ItemData data={item} index={index} />
								</div>
							))}
						</div>
					</>
				) : (
					<div className="nodata absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<img
							src="/images/nodata.png"
							alt="Devtify Frontend Test No Data"
							className={`mx-auto w-[140px]`}
							width={0}
							height={0}
							sizes="100vw"
						/>
						<p className="text-gray4 text-center text-[24px]">Danh sách trống</p>
					</div>
				)}
			</div>
		</>
	);
}

export default memo(ListItemData);
