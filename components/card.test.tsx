import {expect, test} from '@jest/globals';
import {create} from 'react-test-renderer';
import {Card, Button} from '@app/components';

const WIDTH_FACTOR = 4;
const HEIGHT_FACTOR = 3;

const cardDetails = {
	image: {
		src: 'https://picsum.photos/id/1062/500/375',
		aspectRatio: WIDTH_FACTOR / HEIGHT_FACTOR,
		width: 200,
	},
	heading: 'Lorem Ipsum Dolor',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
};

const cardMetaButton = <Button.Link href="#" label="Read more" variant="tertiary"/>;

test('snapshots — vanilla', () => {
	const result = create(
		<Card {...cardDetails}/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshots — framed', () => {
	const result = create(
		<Card isFramed {...cardDetails}/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshots — with meta content', () => {
	const result = create(
		<Card {...cardDetails} meta={cardMetaButton}/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshots — with meta content and auto height', () => {
	const result = create(
		<Card hasAutoHeight {...cardDetails} meta={cardMetaButton}/>,
	).toJSON();

	expect(result).toMatchSnapshot();
});
