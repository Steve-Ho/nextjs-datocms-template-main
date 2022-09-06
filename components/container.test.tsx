import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import Container from './container';

test('snapshot', () => {
	const result = create(
		<Container>
			<p>Hello World</p>
		</Container>,
	).toJSON();

	expect(result).toMatchSnapshot();
});
