import {GraphQLClient} from 'graphql-request';

type DatoRequest = {
	query: string;
	variables?: Record<string, unknown>;
	preview?: boolean;
};

const request = async <T>({query, variables, preview = false}: DatoRequest): Promise<T> => {
	const endpoint = preview
		? 'https://graphql.datocms.com/preview'
		: 'https://graphql.datocms.com/';

	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.DATO_CMS_TOKEN ?? ''}`,
		},
	});

	return client.request<T>(query, variables);
};

export default request;
