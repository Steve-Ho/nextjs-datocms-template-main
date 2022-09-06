import TagManager from 'react-gtm-module';

const initializeGTM = (): void => {
	TagManager.initialize({gtmId: process.env.NEXT_PUBLIC_GTM_CODE ?? 'GTM-000000'});
};

export {
	initializeGTM,
};
