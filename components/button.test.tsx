import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {CheckCircleIcon} from '@heroicons/react/solid';
import {Button} from '@app/components';
import type {Variant, Size, IconAlignment} from './button';

const variants: Variant[] = ['primary', 'secondary', 'tertiary'];
const sizes: Size[] = ['small', 'regular', 'large'];
const iconAlignments: IconAlignment[] = ['left', 'right'];

test('snapshots — semantic', () => {
	for (const variant of variants) {
		for (const size of sizes) {
			for (const iconAlignment of iconAlignments) {
				const result = create(
					<Button.Semantic
						label="Click me"
						variant={variant}
						size={size}
						icon={{svg: CheckCircleIcon, alignment: iconAlignment}}
					/>,
				).toJSON();

				expect(result).toMatchSnapshot();
			}
		}
	}
});

test('snapshots — link', () => {
	for (const variant of variants) {
		for (const size of sizes) {
			for (const iconAlignment of iconAlignments) {
				const result = create(
					<Button.Link
						label="Click me"
						variant={variant}
						size={size}
						icon={{svg: CheckCircleIcon, alignment: iconAlignment}}
					/>,
				).toJSON();

				expect(result).toMatchSnapshot();
			}
		}
	}
});
