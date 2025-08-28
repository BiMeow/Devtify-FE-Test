import { memo, useMemo } from 'react';

function TagStatus({ status, ...props }: any) {
	const tag = useMemo(() => {
		if (typeof window == 'undefined') return <></>;

		switch (status) {
			case 'active':
				return (
					<div className="activeTag bg-success1 text-success6 flexCenter rounded-full px-[12px] py-[4px]">
						<div className="bg-success6 mr-[4px] aspect-1 w-[5px] rounded-full"></div>
						<p>Đang hoạt động</p>
					</div>
				);
			case 'unactive':
				return (
					<div className="activeTag bg-warning2 text-warning6 flexCenter rounded-full px-[12px] py-[4px]">
						<div className="bg-warning6 mr-[4px] aspect-1 w-[5px] rounded-full"></div>
						<p>Chưa kích hoạt</p>
					</div>
				);
			case 'lock':
				return (
					<div className="activeTag bg-gray3 text-gray9 flexCenter rounded-full px-[12px] py-[4px]">
						<div className="bg-gray9 mr-[4px] aspect-1 w-[5px] rounded-full"></div>
						<p>Đã khóa tài khoản</p>
					</div>
				);

			default:
				break;
		}

		return <></>;
	}, [status]);

	return (
		<>
			<div className={`TagStatus font-semibold`}>{tag}</div>
		</>
	);
}

export default memo(TagStatus);
