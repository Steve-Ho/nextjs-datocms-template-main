import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {Select} from '@app/components';

const selectOptions = [
	{key: '1', label: 'Daenerys Targaryen'},
	{key: '2', label: 'Jon Snow'},
	{key: '3', label: 'Arya Stark'},
	{key: '4', label: 'Brandon Stark'},
	{key: '5', label: 'Tyrion Lannister'},
];

test('snapshot — vanilla', () => {
	const result = create(
		<Select id="1" label="Character" options={selectOptions}/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — vanilla + required', () => {
	const result = create(
		<Select
			required
			id="1"
			label="Character"
			placeholder="Select a character..."
			options={selectOptions}
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — helptext', () => {
	const result = create(
		<Select
			required
			id="1"
			label="Character"
			placeholder="Select a character..."
			helpText="Who will become king or queen?"
			options={selectOptions}
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — disabled', () => {
	const result = create(
		<Select
			disabled
			id="1"
			label="Character"
			placeholder="Select a character..."
			options={selectOptions}
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — error', () => {
	const result = create(
		<Select
			required
			id="1"
			label="Character"
			placeholder="Select a character..."
			error="Please refer to season 8"
			options={selectOptions}
		/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});
