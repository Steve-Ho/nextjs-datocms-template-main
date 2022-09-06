import {forwardRef} from 'react';
import * as React from 'react';
import {isNil} from 'remeda';
import {ChevronDownIcon} from '@heroicons/react/solid';
import {collapse} from '@growthops/ext-ts';
import {FormField} from '@app/components/utility';
import type {FormFieldInputProps} from '@app/components/utility/form-field';

type Option = {
	key: string;
	label: string;
};

type SelectProperties = FormFieldInputProps
	& React.ComponentPropsWithoutRef<'select'>
	& {
		options: Option[];
	};

const chevronClasses = collapse(`
	absolute
	top-0
	right-0
	mt-[0.9rem]
	mr-2
	w-5
	text-true-gray-500
	select-none
	pointer-events-none
`);

const Select = forwardRef<HTMLSelectElement, SelectProperties>(({
	className, id, label, error, helpText, options, placeholder, ...intrinsicSelectProperties
}: SelectProperties, reference) => (
	<FormField
		{...{className, id, label, helpText, error}}
		isRequired={intrinsicSelectProperties.required}
		isDisabled={intrinsicSelectProperties.disabled}
	>
		{(label, baseClasses) => (
			<React.Fragment>
				{label}
				<div className="relative">
					<ChevronDownIcon className={chevronClasses}/>
					<select
						ref={reference}
						id={id}
						className={collapse([baseClasses, 'appearance-none'])}
						{...intrinsicSelectProperties}
						defaultValue=""
					>
						{!isNil(placeholder) && (
							<option disabled value="">{placeholder}</option>
						)}
						{options.map(({key, label}) => (
							<option key={key} value={key}>{label}</option>
						))}
					</select>
				</div>
			</React.Fragment>
		)}
	</FormField>
));

Select.displayName = 'Select';

export default Select;

export type {
	Option,
	SelectProperties as SelectProps,
};
