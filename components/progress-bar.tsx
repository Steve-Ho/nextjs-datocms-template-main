import {createContext, useContext, useMemo} from 'react';
import type * as React from 'react';
import {Router} from 'next/router';
import nProgress from 'nprogress';
import type {NProgress} from 'nprogress';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

const Context = createContext({});

const useProgressBar = (): Record<string, () => void> => useContext(Context);
const enableProgressBar = (): NProgress => nProgress.start();
const disableProgressBar = (): NProgress => nProgress.done();

type ProgressBarProperties = {
	children: React.ReactNode;
};

const ProgressBar = ({children}: ProgressBarProperties): JSX.Element => {
	const contextData = useMemo(() => ({
		enableProgressBar,
		disableProgressBar,
	}), []);

	return (
		<Context.Provider value={contextData}>
			{children}
		</Context.Provider>
	);
};

export {
	useProgressBar,
};

export default ProgressBar;
