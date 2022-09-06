import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import Region from './region';

test('snapshot', () => {
	const result = create(
		<Region>
			<p>Hello World</p>
		</Region>,
	).toJSON();

	expect(result).toMatchSnapshot();
});
