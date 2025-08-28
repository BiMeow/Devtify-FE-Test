// FIXME: Update this configuration file based on your project information

const AppConfig = {
	getBaseUrl: (url = '') => {
		if (url?.endsWith('/')) {
			url = url.slice(0, -1);
		}
		return process.env.APP_URL ? `${process.env.APP_URL}${url}` : `https://www.immi-go.com${url}`;
	},
	getBaseAssetUrl: (path = '') => {
		return `${process.env.NEXT_PUBLIC_BASE_ASSET_URL || ''}${path}?v=${process.env.PUBLIC_ASSET_VERSION || ''}`;
	},
	locale: 'vi',
	icons: {
		favicon: `${process.env.NEXT_PUBLIC_BASE_ASSET_URL || ''}/images/favicon.png`,
		icon: `${process.env.NEXT_PUBLIC_BASE_ASSET_URL || ''}/images/favicon.png`,
		shortcut: `${process.env.NEXT_PUBLIC_BASE_ASSET_URL || ''}/images/favicon.png`,
		apple: `${process.env.NEXT_PUBLIC_BASE_ASSET_URL || ''}/images/favicon.png`,
		other: {
			rel: 'favicon.png',
			url: `${process.env.NEXT_PUBLIC_BASE_ASSET_URL || ''}/images/favicon.png`,
		},
	},
};

export default AppConfig;
export const getApiBaseUrl = (path = '') => {
	return `${process.env.NEXT_PUBLIC_BASE_API_URL || ''}${path}`;
};
