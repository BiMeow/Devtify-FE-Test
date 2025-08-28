import PageHome from '@/components/router/PageHome';
import { unstable_noStore as noStore } from 'next/cache';

export default async function Home() {
	noStore();

	return <p className="px-[20px] text-center text-[24px] font-bold uppercase text-red">429 | Too many requests</p>;
}
