import type {NextApiRequest, NextApiResponse} from 'next';

const HTTP_TEMPORARY_REDIRECT = 307;

export default function preview(request: NextApiRequest, response: NextApiResponse): void {
	if (request.query.secret !== process.env.PREVIEW_MODE_SECRET) {
		response.redirect(HTTP_TEMPORARY_REDIRECT, '/');
		response.end();

		return;
	}

	response.setPreviewData({});
	response.redirect(HTTP_TEMPORARY_REDIRECT, '/');
	response.end();
}
