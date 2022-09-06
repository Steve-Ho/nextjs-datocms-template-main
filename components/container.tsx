import {useMemo} from 'react';
import {collapse} from '@growthops/ext-ts';

type ContainerProperties = {
	children: Array<JSX.Element | boolean> | JSX.Element | boolean;
	className?: string;
};

const Container = ({className = '', children}: ContainerProperties): JSX.Element => {
	const classes = useMemo(() => ({
		root: collapse(['container', className]),
	}), [className]);

	return (
		<div className={classes.root}>
			{children}
		</div>
	);
};

export default Container;

export type {
	ContainerProperties as ContainerProps,
};
