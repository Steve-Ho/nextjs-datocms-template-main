import {useMemo} from 'react';
import {collapse} from '@growthops/ext-ts';

type RegionProperties = {
	children: Array<JSX.Element | boolean> | JSX.Element | boolean;
	className?: string;
	hasTopMargin?: boolean;
};

const Region = ({children, className = '', hasTopMargin = true}: RegionProperties): JSX.Element => {
	const classes = useMemo(() => ({
		root: collapse([hasTopMargin ? 'mt-16 md:mt-32' : '', className]),
	}), [hasTopMargin, className]);

	return (
		<section className={classes.root}>
			{children}
		</section>
	);
};

export default Region;

export type {
	RegionProperties as RegionProps,
};
