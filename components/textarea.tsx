import {forwardRef} from 'react';
import * as React from 'react';
import {collapse} from '@growthops/ext-ts';
import {FormField} from '@app/components/utility';
import type {FormFieldInputProps} from '@app/components/utility/form-field';

type TextareaProperties = FormFieldInputProps & React.ComponentPropsWithoutRef<'textarea'>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProperties>(({
	className, id, label, error, helpText, ...intrinsicTextareaProperties
}: TextareaProperties, reference): JSX.Element => (
	<FormField
		{...{className, id, label, helpText, error}}
		isRequired={intrinsicTextareaProperties.required}
		isDisabled={intrinsicTextareaProperties.disabled}
	>
		{(label, baseClasses) => (
			<React.Fragment>
				{label}
				<textarea ref={reference} id={id} className={collapse([baseClasses, 'mb-[-0.3rem]'])} {...intrinsicTextareaProperties}/>
			</React.Fragment>
		)}
	</FormField>
));

Textarea.displayName = 'Textarea';

export default Textarea;

export type {
	TextareaProperties as TextareaProps,
};
