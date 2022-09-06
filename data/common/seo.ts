import type {TitleMetaLinkTag} from 'react-datocms';

type SiteQuery = {
	faviconMetaTags: TitleMetaLinkTag[];
};

const siteSeoQueryString = `
	site: _site {
		faviconMetaTags {
			attributes
			content
			tag
		}
	}
`;

const pageSeoFields = `
	seo: _seoMetaTags {
		attributes
		content
		tag
	}
`;

const formatData = (
	site: SiteQuery, pageSeo: TitleMetaLinkTag[],
): TitleMetaLinkTag[] => [...site.faviconMetaTags, ...pageSeo];

export {
	siteSeoQueryString,
	pageSeoFields,
	formatData,
};

export type {
	SiteQuery,
};
