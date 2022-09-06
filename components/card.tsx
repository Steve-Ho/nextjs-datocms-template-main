import {useMemo} from 'react';
import type {ResponsiveImageType} from 'react-datocms';
import {Image} from 'react-datocms';
import {isNil} from 'remeda';
import {collapse} from '@growthops/ext-ts';
import {Heading, Text} from '@app/components';

type CardProperties = {
	image: ResponsiveImageType;
	heading: string;
	content: string;
	isFramed?: boolean;
	hasAutoHeight?: boolean;
	meta?: JSX.Element;
};

const generateRootClasses = (isFramed: boolean): string => `
	overflow-hidden
	rounded
	h-full
	flex
	flex-col
	${isFramed ? 'bg-white shadow-lg' : ''}
`;

const generateBodyClasses = (isFramed: boolean): string => `
	flex
	flex-col
	flex-grow
	${isFramed ? 'px-4 pb-3' : ''}
`;

const generateMetaClasses = (hasAutoHeight: boolean): string => `
	pt-6
	${hasAutoHeight ? 'mt-auto' : ''}
`;

const generateImageClasses = (isFramed: boolean): string => `
	w-full
	${isFramed ? '' : 'rounded shadow-lg'}
`;

const Card = ({image, heading, content, meta, isFramed = false, hasAutoHeight = false}: CardProperties): JSX.Element => {
	const classes = useMemo(() => ({
		root: collapse(generateRootClasses(isFramed)),
		image: collapse(generateImageClasses(isFramed)),
		body: collapse(generateBodyClasses(isFramed)),
		heading: 'mt-4',
		content: 'mt-2',
		meta: collapse(generateMetaClasses(hasAutoHeight)),
	}), [isFramed, hasAutoHeight]);

	return (
		<article className={classes.root}>
			<Image className={classes.image} data={image}/>
			<div className={classes.body}>
				<Heading className={classes.heading} label={heading} variant="heading-four"/>
				<Text className={classes.content} variant="text-regular">{content}</Text>
				{!isNil(meta) && (
					<div className={classes.meta}>
						{meta}
					</div>
				)}
			</div>
		</article>
	);
};

export default Card;

export type {
	CardProperties as CardProps,
};
