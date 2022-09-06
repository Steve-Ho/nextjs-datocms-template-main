import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {Input} from '@app/components';

test('snapshot — vanilla', () => {
	const result = create(
		<Input
			id="1"
			label="Name"
			placeholder="Jon Snow"
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — vanilla + required', () => {
	const result = create(
		<Input
			required
			id="1"
			label="Name"
			placeholder="Jon Snow"
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — helptext', () => {
	const result = create(
		<Input
			id="1"
			label="Name"
			defaultValue="Arya"
			helpText="What would you like us to call you?"
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — disabled', () => {
	const result = create(
		<Input
			disabled
			id="1"
			label="Name"
			defaultValue="Arya"
			helpText="What would you like us to call you?"
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — error', () => {
	const result = create(
		<Input
			id="1"
			label="Name"
			error="First name cannot contain mathematical equations"
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});
