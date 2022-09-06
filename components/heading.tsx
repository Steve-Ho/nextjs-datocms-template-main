import {collapse} from '@growthops/ext-ts';

type Variant =
	| 'heading-five'
	| 'heading-four'
	| 'heading-one'
	| 'heading-six'
	| 'heading-three'
	| 'heading-two'
	| 'headline'
	| 'subheading';

type SemanticElement =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span';

type HeadingProperties = {
	variant: Variant;
	label: string;
	element?: SemanticElement;
	className?: string;
};

const Heading = ({variant, label, element = 'p', className = ''}: HeadingProperties): JSX.Element => {
	const sharedProperties = {
		className: collapse([variant, className]),
	};

	switch (element) {
		case 'h1': return <h1 {...sharedProperties}>{label}</h1>;
		case 'h2': return <h2 {...sharedProperties}>{label}</h2>;
		case 'h3': return <h3 {...sharedProperties}>{label}</h3>;
		case 'h4': return <h4 {...sharedProperties}>{label}</h4>;
		case 'h5': return <h5 {...sharedProperties}>{label}</h5>;
		case 'h6': return <h6 {...sharedProperties}>{label}</h6>;
		case 'p': return <p {...sharedProperties}>{label}</p>;
		case 'span': return <span {...sharedProperties}>{label}</span>;
	}
};

export default Heading;

export type {
	Variant,
	SemanticElement,
	HeadingProperties as HeadingProps,
};
