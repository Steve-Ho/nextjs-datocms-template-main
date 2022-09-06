import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react';
import {FingerPrintIcon, FireIcon} from '@heroicons/react/solid';
import {Accordion} from '@app/components';

test('snapshot — vanilla', () => {
	const result = create(
		<Accordion.Container>
			<Accordion.Panel label="Foo">
				<p>Fooby</p>
			</Accordion.Panel>
			<Accordion.Panel label="Bar">
				<p>Barby</p>
			</Accordion.Panel>
		</Accordion.Container>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — with icons', () => {
	const result = create(
		<Accordion.Container>
			<Accordion.Panel label="Foo" icon={FingerPrintIcon}>
				<p>Foo</p>
			</Accordion.Panel>
			<Accordion.Panel label="Bar" icon={FireIcon}>
				<p>Barby</p>
			</Accordion.Panel>
		</Accordion.Container>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('no panels are displayed by default', () => {
	const {queryByText} = render(
		<Accordion.Container>
			<Accordion.Panel label="Foo">
				<p>Fooby</p>
			</Accordion.Panel>
			<Accordion.Panel label="Bar">
				<p>Barby</p>
			</Accordion.Panel>
		</Accordion.Container>,
	);

	expect(queryByText('Fooby')).toBeNull();
	expect(queryByText('Barby')).toBeNull();
});

test('clicking on a panel displays the associated panel', () => {
	const {getByText, queryByText} = render(
		<Accordion.Container>
			<Accordion.Panel label="Foo">
				<p>Fooby</p>
			</Accordion.Panel>
			<Accordion.Panel label="Bar">
				<p>Barby</p>
			</Accordion.Panel>
		</Accordion.Container>,
	);

	fireEvent.click(getByText('Bar'));

	expect(queryByText('Fooby')).toBeNull();
	expect(queryByText('Barby')).not.toBeNull();
});

test('clicking on multiple panels displays the last associated panel in single expand mode', () => {
	const {getByText, queryByText} = render(
		<Accordion.Container expandMode="single">
			<Accordion.Panel label="Foo">
				<p>Fooby</p>
			</Accordion.Panel>
			<Accordion.Panel label="Bar">
				<p>Barby</p>
			</Accordion.Panel>
		</Accordion.Container>,
	);

	fireEvent.click(getByText('Foo'));
	fireEvent.click(getByText('Bar'));

	expect(queryByText('Fooby')).toBeNull();
	expect(queryByText('Barby')).not.toBeNull();
});

test('clicking on multiple panels displays all associated panels in multiple expand mode', () => {
	const {getByText, queryByText} = render(
		<Accordion.Container expandMode="multiple">
			<Accordion.Panel label="Foo">
				<p>Fooby</p>
			</Accordion.Panel>
			<Accordion.Panel label="Bar">
				<p>Barby</p>
			</Accordion.Panel>
		</Accordion.Container>,
	);

	fireEvent.click(getByText('Foo'));
	fireEvent.click(getByText('Bar'));

	expect(queryByText('Fooby')).not.toBeNull();
	expect(queryByText('Barby')).not.toBeNull();
});
