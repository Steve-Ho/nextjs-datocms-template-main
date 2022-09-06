import type {TitleMetaLinkTag} from 'react-datocms';
import temporaryData from './home.data.json';
import type {DTO} from './dto';

type HomeDTO = DTO & {
	seo: TitleMetaLinkTag[];
	heading: string;
	introduction: string;
	viewShowcaseLabel: string;
};

const getData = (): HomeDTO => temporaryData;

export default getData;

export type {
	HomeDTO,
};
