import {forwardRef} from 'react';
import type * as React from 'react';
import {collapse} from '@growthops/ext-ts';
import {FormField} from '@app/components/utility';
import type {FormFieldInputProps} from '@app/components/utility/form-field';
import {CheckIcon} from '@heroicons/react/solid';

type RadioProperties = FormFieldInputProps &
	React.ComponentPropsWithoutRef<'input'>;

const radioWrapperClasses = collapse(`
	flex
	items-center
	mr-4
	py-1
	mt-3
`);

const radioClasses = collapse(`
	opacity-0
	absolute
	h-8
	w-8
`);

const radioSVGWrapperClasses = collapse(`
	bg-white
	border-2
	rounded-full
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

const radioSVGClasses = collapse(`
	fill-current
	hidden
	w-3
	h-3
	text-gray-600
	pointer-events-none
	bg-gray-300
	rounded-full
`);

const Radio = forwardRef<HTMLInputElement, RadioProperties>(({
	className, id, label, error, helpText, ...intrinsicRadioProperties
}: RadioProperties, reference) => (
	<FormField
		{...{className, id, label, helpText, error}}
		isRequired={intrinsicRadioProperties.required}
		isDisabled={intrinsicRadioProperties.disabled}
	>
		{(label, baseClasses) => (
			<div className={radioWrapperClasses}>
				<input
					ref={reference}
					id={id}
					type="radio"
					className={collapse([baseClasses, radioClasses])}
					{...intrinsicRadioProperties}
				/>
				<div className={radioSVGWrapperClasses}>
					<CheckIcon className={radioSVGClasses}/>
				</div>
				{label}
			</div>
		)}
	</FormField>
));

Radio.displayName = 'Radio';

export default Radio;

export type {RadioProperties as RadioProps};
