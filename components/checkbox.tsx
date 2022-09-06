import {forwardRef} from 'react';
import type * as React from 'react';
import {collapse} from '@growthops/ext-ts';
import {FormField} from '@app/components/utility';
import type {FormFieldInputProps} from '@app/components/utility/form-field';
import {CheckIcon} from '@heroicons/react/solid';

type CheckboxProperties = FormFieldInputProps &
	React.ComponentPropsWithoutRef<'input'>;

const checkboxWrapperClasses = collapse(`
	flex
	items-center
	mr-4
	py-1
	mt-3
`);

const checkboxClasses = collapse(`
	opacity-0
	absolute
	h-8
	w-8
`);

const checkboxSVGWrapperClasses = collapse(`
	bg-white
	border-2
	rounded-sm
	border-gray-400
	w-5
	h-5
	flex
	flex-shrink-0
	justify-center
	items-center
	mr-2
	focus-within:border-gray-500
`);

const checkboxSVGClasses = collapse(`
	fill-current
	hidden
	w-3
	h-3
	text-gray-600
	pointer-events-none
	bg-gray-300
	rounded-sm
`);

const Checkbox = forwardRef<HTMLInputElement, CheckboxProperties>(({
	className, id, label, error, helpText, ...intrinsicCheckboxProperties
}: CheckboxProperties, reference) => (
	<FormField
		{...{className, id, label, helpText, error}}
		isRequired={intrinsicCheckboxProperties.required}
		isDisabled={intrinsicCheckboxProperties.disabled}
	>
		{(label, baseClasses) => (
			<div className={checkboxWrapperClasses}>
				<input
					ref={reference}
					id={id}
					type="checkbox"
					className={collapse([baseClasses, checkboxClasses])}
					{...intrinsicCheckboxProperties}
				/>
				<div className={checkboxSVGWrapperClasses}>
					<CheckIcon className={checkboxSVGClasses}/>
				</div>
				{label}
			</div>
		)}
	</FormField>
));

Checkbox.displayName = 'Checkbox';

export default Checkbox;

export type {CheckboxProperties as CheckboxProps};
