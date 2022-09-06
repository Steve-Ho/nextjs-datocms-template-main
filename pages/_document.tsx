import {Html, Head, Main, NextScript} from 'next/document';

const Document = (): JSX.Element => (
	<Html lang="en">
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link crossOrigin="anonymous" rel="preconnect" href="https://fonts.gstatic.com"/>
			<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
		</Head>
		<body className="antialiased">
			<Main/>
			<NextScript/>
		</body>
	</Html>
);

export default Document;
