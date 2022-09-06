import LaunchDarkly from 'launchdarkly-node-server-sdk';
import type {LDClient} from 'launchdarkly-node-server-sdk';
import {isObject} from 'remeda';
import {notNil} from '@growthops/ext-ts';
import flags from '@app/flags.json';

let launchDarklyClient: LDClient | undefined;

const initializeClient = async (): Promise<LDClient> => {
	const client = LaunchDarkly.init(process.env.LAUNCHDARKLY_SDK_KEY ?? '');

	await client.waitForInitialization();

	return client;
};

const getClient = async (): Promise<LDClient> => {
	if (notNil(launchDarklyClient)) {
		return launchDarklyClient;
	}

	return launchDarklyClient = await initializeClient();
};

const getFlag = async <T>(key: string, defaultValue: T): Promise<T> => {
	if (isObject(flags) && key in flags) {
		return flags[key as keyof typeof flags];
	}

	const client = await getClient();

	const user = {
		key: 'nextjs-server',
	};

	return client.variation(key, user, defaultValue) as Promise<T>;
};

export {
	getClient,
	getFlag,
};
