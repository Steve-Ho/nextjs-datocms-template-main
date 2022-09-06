import {collapse} from '@growthops/ext-ts';

type Variant =
	| 'text-lead'
	| 'text-regular'
	| 'text-small';

type SemanticElement = 'p' | 'span';

type TextProperties = {
	variant?: Variant;
	children: string;
	element?: SemanticElement;
	className?: string;
};

const Text = ({
	variant = 'text-regular', children, element = 'p', className = '',
}: TextProperties): JSX.Element => {
	const sharedProperties = {
		className: collapse([variant, className]),
	};

	switch (element) {
		case 'p': return <p {...sharedProperties}>{children}</p>;
		case 'span': return <span {...sharedProperties}>{children}</span>;
	}
};

export default Text;

export type {
	Variant,
	SemanticElement,
	TextProperties as TextProps,
};
