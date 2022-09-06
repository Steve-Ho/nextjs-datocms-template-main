import {aspectRatioNotations} from '@growthops/ext-ts';
import type {AspectRatio} from '@growthops/ext-ts';

type ImageFit =
	| 'clamp'
	| 'clip'
	| 'crop'
	| 'facearea'
	| 'fill'
	| 'fillmax'
	| 'max'
	| 'min'
	| 'scale';

type ResponsiveImageConfig = {
	fit?: ImageFit;
	width?: number;
	aspectRatio?: AspectRatio;
};

const AVERAGE_LAPTOP_RESOLUTION = 1440;

const generateResponsiveImageFields = (
	label: string,
	{width = AVERAGE_LAPTOP_RESOLUTION, aspectRatio = 'display', fit = 'crop'}: ResponsiveImageConfig = {},
): string => `
	${label}: responsiveImage(imgixParams: {w: "${width}", fit: ${fit}, ar: "${aspectRatioNotations[aspectRatio]}"}) {
		srcSet
		webpSrcSet
		sizes
		src
		width
		height
		aspectRatio
		alt
		title
		bgColor
		base64
	}
`;

export default generateResponsiveImageFields;

export type {
	ImageFit,
	ResponsiveImageConfig,
};
