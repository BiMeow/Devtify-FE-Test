/* eslint-disable @next/next/no-page-custom-font */
import FacebookPixel from '@/components/common/tracking-code/FacebookPixel';
import Providers from '@/components/context/compose/Providers';
import DefaultLayout from '@/components/layout/DefaultLayout';
import AppConfig from '@/config/AppConfig';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import 'keen-slider/keen-slider.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './globals.scss';
import { headers } from 'next/headers';

export async function generateMetadata({ params, searchParams }: any, parent: any) {
	// read route params
	const locale = params.locale;
	const headersList = headers();
	const host = headersList.get('host');
	const protocol = headersList.get('x-forwarded-proto') || 'https';
	const fullUrl = `${protocol}://${host}${headersList.get('x-next-url') || ''}`;

	let title: any = 'Devtify Frontend Test';
	let desc: any = 'Devtify Frontend Test';

	return {
		metadataBase: new URL(fullUrl),
		title: title,
		description: desc,

		openGraph: {
			title: title,
			description: desc,
			url: fullUrl,
			siteName: title,
			images: [
				{
					url: `${fullUrl}/images/thumbshare.png`, // Must be an absolute URL
					width: 1200,
					height: 630,
				},
			],
			locale: AppConfig.locale,
			type: 'website',
		},

		icons: AppConfig.icons,

		robots: {
			follow: true,
			index: true,
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="viewport"
					key="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</head>
			<body>
				<Providers>
					<DefaultLayout>{children}</DefaultLayout>
				</Providers>
			</body>
			{/* <GoogleAnalytics gaId={'G-PYTMHM0JFC'} />
			<GoogleTagManager gtmId={'GTM-PZPH4PV'} />
			<FacebookPixel key={'726556831350736'} fbId={'726556831350736'} /> */}
		</html>
	);
}
