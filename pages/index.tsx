import type {GetStaticProps} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {renderMetaTags} from 'react-datocms';
import {ChevronRightIcon, TerminalIcon} from '@heroicons/react/solid';
import {getHomeData} from '@app/data';
import type {HomeDTO} from '@app/data/home';
import {revalidateSuccess} from '@app/library';

type IndexProperties = {
	data: HomeDTO;
};

const classes = {
	root: 'flex items-center justify-center h-screen bg-gray-900',
	main: 'text-center',
	heading: 'flex items-center justify-center space-x-2 text-gray-200 text-5xl font-medium',
	introduction: 'mt-4 text-gray-500 font-bold',
	showcaseLink: `
		inline-flex
		items-center
		mt-12
		space-x-1
		shadow-lg
		text-sm
		font-bold
		rounded-lg
		pl-4
		pr-2
		py-2
		text-green-400
		bg-gray-700
	`,
};

const Index = ({data}: IndexProperties): JSX.Element => (
	<div className={classes.root}>
		<Head>{renderMetaTags(data.seo)}</Head>
		<main className={classes.main}>
			<h1 className={classes.heading}>
				<TerminalIcon className="animate-pulse w-12"/>
				<span>{data.heading}</span>
			</h1>
			<p className={classes.introduction}>{data.introduction}</p>
			<Link href="/build/showcase">
				<a className={classes.showcaseLink}>
					<span>{data.viewShowcaseLabel}</span>
					<ChevronRightIcon className="w-5"/>
				</a>
			</Link>
		</main>
	</div>
);

const getStaticProps: GetStaticProps = async () => revalidateSuccess({
	data: await getHomeData(),
});

export {
	getStaticProps,
};

export default Index;
