import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {Textarea} from '@app/components';

test('snapshot — vanilla', () => {
	const result = create(
		<Textarea
			required
			id="1"
			label="Description"
			placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — helptext', () => {
	const result = create(
		<Textarea
			id="1"
			label="Description"
			defaultValue="Arya"
			helpText="Tell us a story"
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — disabled', () => {
	const result = create(
		<Textarea
			disabled
			id="1"
			label="Description"
			defaultValue="Arya"
			helpText="Tell us a story"
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — error', () => {
	const result = create(
		<Textarea
			id="1"
			label="Description"
			error="Description must contain at least 3 dragon references"
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});
