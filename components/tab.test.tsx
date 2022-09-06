import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react';
import {FingerPrintIcon, FireIcon} from '@heroicons/react/solid';
import {Tab} from '@app/components';

test('snapshot — vanilla', () => {
	const result = create(
		<Tab.Container>
			<Tab.Panel label="Foo">
				<p>Fooby</p>
			</Tab.Panel>
			<Tab.Panel label="Bar">
				<p>Barby</p>
			</Tab.Panel>
		</Tab.Container>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — with icons', () => {
	const result = create(
		<Tab.Container>
			<Tab.Panel label="Foo" icon={FingerPrintIcon}>
				<p>Foo</p>
			</Tab.Panel>
			<Tab.Panel label="Bar" icon={FireIcon}>
				<p>Barby</p>
			</Tab.Panel>
		</Tab.Container>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('first tab is displayed by default', () => {
	const {queryByText} = render(
		<Tab.Container>
			<Tab.Panel label="Foo">
				<p>Fooby</p>
			</Tab.Panel>
			<Tab.Panel label="Bar">
				<p>Barby</p>
			</Tab.Panel>
		</Tab.Container>,
	);

	expect(queryByText('Fooby')).not.toBeNull();
	expect(queryByText('Barby')).toBeNull();
});

test('clicking on a tab container button displays the associated panel', () => {
	const {getByText, queryByText} = render(
		<Tab.Container>
			<Tab.Panel label="Foo">
				<p>Fooby</p>
			</Tab.Panel>
			<Tab.Panel label="Bar">
				<p>Barby</p>
			</Tab.Panel>
		</Tab.Container>,
	);

	fireEvent.click(getByText('Bar'));

	expect(queryByText('Fooby')).toBeNull();
	expect(queryByText('Barby')).not.toBeNull();
});
