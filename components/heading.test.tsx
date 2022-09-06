import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {Heading} from '@app/components';
import type {Variant, SemanticElement} from './heading';

const variants: Variant[] = [
	'headline',
	'heading-one',
	'heading-two',
	'heading-three',
	'heading-four',
	'heading-five',
	'heading-six',
	'subheading',
];

const elements: SemanticElement[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

test('snapshots', () => {
	for (const variant of variants) {
		for (const element of elements) {
			const result = create(
				<Heading label="Heading" variant={variant} element={element}/>,
			).toJSON();

			expect(result).toMatchSnapshot();
		}
	}
});
