import {useMemo} from 'react';
import type * as React from 'react';
import {isNil} from 'remeda';
import {InformationCircleIcon, ExclamationCircleIcon} from '@heroicons/react/solid';
import {collapse} from '@growthops/ext-ts';

type FormFieldInputProperties = {
	id: string;
	label: string;
	helpText?: string;
	error?: string;
	className?: string;
};

type FormFieldProperties = FormFieldInputProperties & {
	isRequired?: boolean;
	isDisabled?: boolean;
	children: (label: JSX.Element, baseClasses: string) => JSX.Element;
};

const generateMetaText = (
	text: string | undefined, additionalClasses: string, Svg: React.ElementType,
): JSX.Element | false => !isNil(text) && (
	<div className={collapse(['flex mt-1 items-center space-x-1', additionalClasses])}>
		<Svg className="w-4"/>
		<span className="block text-xs">{text}</span>
	</div>
);

const baseClasses = `
	mt-1
	border
	rounded
	px-2
	py-1
	w-full
	text-regular
`;

const getErrorClasses = (error: string | undefined): string =>
	isNil(error) ? 'border-true-gray-300' : 'border-red-300';

const getDisabledClasses = (disabled: boolean | undefined): string =>
	disabled != undefined && disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white';

const FormField = ({
	className, id, label, isRequired, isDisabled, helpText, error, children,
}: FormFieldProperties): JSX.Element => {
	const smartLabel = useMemo(
		() => `${label} ${isRequired != undefined && isRequired ? '*' : ''}`.trim(),
		[label, isRequired],
	);

	const labelClasses = useMemo(
		() => `block text-small font-semibold ${isNil(error) ? '' : 'text-red-500'}`,
		[error],
	);

	const fieldClasses = useMemo(
		() => collapse([
			baseClasses,
			getErrorClasses(error),
			getDisabledClasses(isDisabled),
		]),
		[error, isDisabled],
	);

	const labelSpan = useMemo(() => <span className={labelClasses}>{smartLabel}</span>, [labelClasses, smartLabel]);

	return (
		<div className={className}>
			<label htmlFor={id}>
				{children(labelSpan, fieldClasses)}
			</label>
			{generateMetaText(helpText, 'text-true-gray-500', InformationCircleIcon)}
			{generateMetaText(error, 'text-red-500', ExclamationCircleIcon)}
		</div>
	);
};

export default FormField;

export type {
	FormFieldInputProperties as FormFieldInputProps,
	FormFieldProperties as FormFieldProps,
};
