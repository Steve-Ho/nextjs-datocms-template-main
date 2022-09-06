import {forwardRef} from 'react';
import * as React from 'react';
import {collapse} from '@growthops/ext-ts';
import {FormField} from '@app/components/utility';
import type {FormFieldInputProps} from '@app/components/utility/form-field';

type InputProperties = FormFieldInputProps & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProperties>(({
	className, id, label, error, helpText, ...intrinsicInputProperties
}: InputProperties, reference) => (
	<FormField
		{...{className, id, label, helpText, error}}
		isRequired={intrinsicInputProperties.required}
		isDisabled={intrinsicInputProperties.disabled}
	>
		{(label, baseClasses) => (
			<React.Fragment>
				{label}
				<input ref={reference} id={id} className={collapse(baseClasses)} {...intrinsicInputProperties}/>
			</React.Fragment>
		)}
	</FormField>
));

Input.displayName = 'Input';

export default Input;

export type {
	InputProperties as InputProps,
};
