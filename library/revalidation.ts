import type {GetStaticPropsResult} from 'next';
import revalidationTimeouts from '@app/config/revalidation';

type Properties = Record<string, unknown>;

const revalidateSuccess = (properties: Properties = {}): GetStaticPropsResult<Properties> => ({
	props: properties,
	revalidate: revalidationTimeouts.standard,
});

const revalidateNotFound = (temporary = false): GetStaticPropsResult<Properties> => ({
	props: {},
	notFound: true,
	revalidate: temporary ? revalidationTimeouts.standard : revalidationTimeouts.notFound,
});

export {
	revalidateSuccess,
	revalidateNotFound,
};
