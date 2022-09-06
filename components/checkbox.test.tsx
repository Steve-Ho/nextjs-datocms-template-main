import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {Checkbox} from '@app/components';

test('snapshot — vanilla', () => {
	const result = create(<Checkbox id="checkbox-1" label="Vanilla"/>).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — vanilla + required', () => {
	const result = create(
		<Checkbox required id="checkbox-1" label="Required"/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — helptext', () => {
	const result = create(
		<Checkbox label="Helptext" id="checkbox-1" helpText="This is the help text"/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — disabled', () => {
	const result = create(
		<Checkbox disabled id="checkbox-1" label="Disabled"/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — error', () => {
	const result = create(
		<Checkbox id="checkbox-1" label="Error" error="This is an error"/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});
