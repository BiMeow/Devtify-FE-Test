import { useStorage } from '@/components/context/StorageProvider';
import { notification } from 'antd';
import { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function ItemData({ data, index, ...props }: any) {
	const { dataVisible, setDataVisible } = useStorage();

	const vadilateInput = () => {};

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<any>({ mode: 'all' });

	const onSubmitItem = async (dataForm: any) => {
		console.log('BiMeow log dataForm', dataForm);
		let newDataVisible = [...dataVisible];
		newDataVisible[index] = { ...newDataVisible[index], ...dataForm };
		setDataVisible(newDataVisible);
		notification.success({
			message: 'Thành công',
			description: 'Cập nhật dữ liệu thành công',
		});
	};

	const onError = (errors: any) => {
		console.log('Errors:', errors);
		notification.error({
			message: 'Lỗi',
			description: 'Dữ liệu chưa hợp lệ, vui lòng kiểm tra lại!',
		});
	};

	return (
		<>
			<div className={`ItemData`}>
				<form
					className="item grid grid-cols-[50px_160px_300px_160px_180px_180px_70px_180px] font-medium"
					key={index}
					onSubmit={handleSubmit(onSubmitItem, onError)}
					onBlur={handleSubmit(onSubmitItem, onError)}
				>
					<div className="itemTableContent">{index + 1}</div>
					<div className="itemTableContent">{data.id}</div>
					<div className="itemTableContent">
						<input
							type="text"
							className="cusInput text-[12px]"
							defaultValue={data.bio}
							{...register('bio', { required: true })}
						/>
						{errors?.bio && <div className="errors">Vui lòng kiểm tra Bio!</div>}
					</div>
					<div className="itemTableContent">
						<input
							type="text"
							className="cusInput text-[12px]"
							defaultValue={data.name}
							{...register('name', { required: true })}
						/>
					</div>
					<div className="itemTableContent">
						<input
							type="text"
							className="cusInput text-[12px]"
							defaultValue={data.language}
							{...register('language', { required: true })}
						/>
					</div>
					<div className="itemTableContent">
						<input
							type="text"
							className="cusInput text-[12px]"
							defaultValue={data.version}
							{...register('version', { required: true })}
						/>
					</div>
					<div className="itemTableContent">BM</div>
					<div className="itemTableContent">2020-05-04 09:18:16</div>
				</form>
			</div>
		</>
	);
}

export default memo(ItemData);
