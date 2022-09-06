import React from 'react';
import {useRouter} from 'next/router';
import {collapse} from '@growthops/ext-ts';

const rootClasses = `
	bg-yellow-200
	border-b-4
	border-yellow-600
	bottom-0
	fixed
	flex
	items-center
	mr-4
	pb-3
	pt-4
	px-6
	right-0
	rounded-t-lg
	shadow-xl
	space-x-3
	text-yellow-900
	z-50
`;

const labelClasses = `
	font-bold
	text-sm
	uppercase
`;

const linkClasses = `
	bg-yellow-400
	border-l
	border-yellow-300
	font-medium
	px-2
	py-1
	rounded-full
	text-xs
	uppercase
`;

type PreviewModeProperties = {
	disableUrl: string;
};

const PreviewMode = ({disableUrl}: PreviewModeProperties): JSX.Element => {
	const router = useRouter();

	if (router.isPreview) {
		return (
			<div className={collapse(rootClasses)}>
				<span className={collapse(labelClasses)}>Preview mode</span>
				<a className={collapse(linkClasses)} href={disableUrl}>Exit</a>
			</div>
		);
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <React.Fragment/>;
};

export default PreviewMode;
