import {createContext, useEffect, useState, useContext} from 'react';
import {initialize} from 'launchdarkly-js-client-sdk';
import type {LDClient, LDFlagSet} from 'launchdarkly-js-client-sdk';
import {isObject} from 'remeda';
import {notNil} from '@growthops/ext-ts';
import flags from '@app/flags.json';

type LDContext = {
	client: LDClient | undefined;
	failed: boolean;
	flags: LDFlagSet;
};

type LDClientProviderProperties = {
	children: JSX.Element | JSX.Element[] | false;
};

type Flag<T> = {
	ready: boolean;
	value: T;
};

const defaultContextValue = {
	client: undefined,
	failed: false,
	flags: {},
};

const Context = createContext<LDContext>(defaultContextValue);

const useLDClientContext = (): LDContext => useContext(Context);

const LDClientProvider = ({children}: LDClientProviderProperties): JSX.Element => {
	const [state, setState] = useState<LDContext>(defaultContextValue);

	useEffect(() => {
		const client = initialize(process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_ID ?? '', {key: 'nextjs-client', anonymous: true}, {
			bootstrap: 'localStorage',
		});

		client.on('initialized', () => {
			setState({
				client,
				failed: false,
				flags: client.allFlags(),
			});
		});

		client.on('failed', () => {
			setState(current => ({
				...current,
				failed: true,
			}));
		});

		client.on('error', () => {
			setState(current => ({
				...current,
				failed: true,
			}));
		});
	}, []);

	return (
		<Context.Provider value={state}>
			{children}
		</Context.Provider>
	);
};

const useFlag = <T, >(key: string, defaultValue: T): Flag<T> => {
	const context = useLDClientContext();
	const [flagState, setFlagState] = useState<Flag<T>>({
		ready: false,
		value: defaultValue,
	});

	useEffect(() => {
		if (isObject(flags) && key in flags) {
			setFlagState({
				ready: true,
				value: flags[key as keyof typeof flags] as T,
			});

			return;
		}

		const localStorageOverride = window.localStorage.getItem(`flag:${key}`);

		if (localStorageOverride !== null) {
			setFlagState({
				ready: true,
				value: JSON.parse(localStorageOverride) as T,
			});

			return;
		}

		if (notNil(context.client) && !context.failed) {
			if (notNil(context.flags[key])) {
				setFlagState({
					ready: true,
					value: context.flags[key] as T,
				});

				return;
			}

			setFlagState({
				ready: true,
				value: defaultValue,
			});

			return;
		}

		if (context.failed) {
			setFlagState({
				ready: true,
				value: defaultValue,
			});
		}
	}, [context]);

	return flagState;
};

export {
	LDClientProvider,
	useLDClientContext,
	useFlag,
};
