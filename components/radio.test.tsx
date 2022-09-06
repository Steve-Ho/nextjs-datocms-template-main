import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {Radio} from '@app/components';

test('snapshot — vanilla', () => {
	const result = create(<Radio id="radio-1" label="Vanilla"/>).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — vanilla + required', () => {
	const result = create(
		<Radio required id="radio-1" label="Required"/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — helptext', () => {
	const result = create(
		<Radio label="Helptext" id="radio-1" helpText="This is the help text"/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — disabled', () => {
	const result = create(
		<Radio disabled id="radio-1" label="Disabled"/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — error', () => {
	const result = create(
		<Radio id="radio-1" label="Error" error="This is an error"/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});
