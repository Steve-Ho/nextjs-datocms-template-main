import {forwardRef, useMemo} from 'react';
import type * as React from 'react';
import {isNil} from 'remeda';
import {collapse} from '@growthops/ext-ts';

type Variant =
	| 'primary'
	| 'secondary'
	| 'tertiary';

type Size =
	| 'large'
	| 'regular'
	| 'small';

type IconAlignment = 'left' | 'right';

type Icon = {
	svg: React.ElementType;
	alignment?: IconAlignment;
	className?: string;
};

type BaseButtonProperties = {
	label: string;
	className?: string;
	variant?: Variant;
	size?: Size;
	icon?: Icon;
};

type SemanticButtonProperties = BaseButtonProperties & React.ComponentPropsWithoutRef<'button'>;

type LinkButtonProperties = BaseButtonProperties & React.ComponentPropsWithoutRef<'a'>;

const baseClasses = 'inline-flex items-center rounded !leading-none';

const variantClasses: Record<Variant, string> = {
	primary: 'bg-true-gray-600 text-white',
	secondary: 'bg-true-gray-300 text-true-gray-600',
	tertiary: 'border border-true-gray-300 text-true-gray-700',
};

const sizeClasses: Record<Size, string> = {
	large: 'px-8 py-5 heading-four space-x-4',
	regular: 'px-6 py-4 heading-six space-x-3',
	small: 'px-5 py-3 text-small space-x-2',
};

const iconClasses: Record<Size, string> = {
	large: 'w-7',
	regular: 'w-5',
	small: 'w-4',
};

const generateIcon = (
	icon: Icon | undefined,
	alignment: IconAlignment,
	classes: string,
	alignmentAdjustmentClasses: string,
): JSX.Element | undefined => {
	if (!isNil(icon) && (icon.alignment ?? 'left') === alignment) {
		return <icon.svg className={collapse([classes, alignmentAdjustmentClasses])}/>;
	}
};

const useClasses = (
	variant: Variant, size: Size, className: string | undefined, icon: Icon | undefined,
): Record<string, string> => useMemo(
	() => ({
		root: collapse([baseClasses, variantClasses[variant], sizeClasses[size], className ?? '']),
		icon: collapse([iconClasses[size], icon?.className ?? '']),
	}),
	[variant, size, className, icon?.className],
);

const useIcons = (icon: Icon | undefined, classes: string): Record<string, JSX.Element | undefined> => useMemo(() => ({
	left: generateIcon(icon, 'left', classes, '-ml-2'), // -ml-* here to visually weight the icon appropriately.
	right: generateIcon(icon, 'right', classes, '!-mr-2'), // !-mr-* here to visually weight the icon appropriately.
}), [icon, classes]);

const Semantic = ({
	label, variant = 'primary', size = 'regular', className, icon, ...intrinsicButtonProperties
}: SemanticButtonProperties): JSX.Element => {
	const classes = useClasses(variant, size, className, icon);
	const icons = useIcons(icon, classes.icon);

	return (
		<button className={classes.root} {...intrinsicButtonProperties} type="button">
			{icons.left}
			<span>{label}</span>
			{icons.right}
		</button>
	);
};

const Link = forwardRef<HTMLAnchorElement, LinkButtonProperties>(({
	label, variant = 'primary', size = 'regular', className, icon, ...intrinsicAnchorProperties
}: LinkButtonProperties, reference): JSX.Element => {
	const classes = useClasses(variant, size, className, icon);
	const icons = useIcons(icon, classes.icon);

	return (
		<a ref={reference} className={classes.root} {...intrinsicAnchorProperties} rel="noreferrer">
			{icons.left}
			<span>{label}</span>
			{icons.right}
		</a>
	);
});

Link.displayName = 'Link';

const Button = {
	Semantic,
	Link,
};

export default Button;

export type {
	Variant,
	Size,
	IconAlignment,
	Icon,
	BaseButtonProperties as BaseButtonProps,
	SemanticButtonProperties as SemanticButtonProps,
	LinkButtonProperties as LinkButtonProps,
};
