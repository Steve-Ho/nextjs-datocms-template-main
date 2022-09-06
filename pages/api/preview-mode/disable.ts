import type {NextApiRequest, NextApiResponse} from 'next';

const HTTP_TEMPORARY_REDIRECT = 307;

export default function preview(request: NextApiRequest, response: NextApiResponse): void {
	response.clearPreviewData();
	response.redirect(HTTP_TEMPORARY_REDIRECT, '/');
	response.end();
}
