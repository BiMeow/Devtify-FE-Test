import { memo } from 'react';
import { useRouter } from 'next/navigation';

function HeaderIconButton({ text, icon, ...props }: any) {
	return (
		<div className="HeaderIconButton group flex cursor-pointer items-center gap-[5px] rounded-[10px] p-[10px] font-medium duration-300 hover:text-green">
			<div className="icon text-[12px] text-[#B6B6B6] duration-300 group-hover:text-green">{icon}</div>
			<p>{text}</p>
		</div>
	);
}

export default memo(HeaderIconButton);
