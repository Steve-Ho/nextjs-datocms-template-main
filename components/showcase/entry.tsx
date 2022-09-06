import {useState, useEffect} from 'react';
import type * as React from 'react';
import {collapse} from '@growthops/ext-ts';

type Width =
	| 'auto'
	| 'large'
	| 'medium'
	| 'small';

type EntryProperties = {
	name: string;
	importName: string;
	isPadded?: boolean;
	width?: Width;
	path?: string;
	className?: string;
	children: React.ReactNode;
};

const INDEX_AFTER_HASH = 1;

const getWidthClass = (width: Width): string => ({
	auto: 'w-full',
	small: 'max-w-md',
	medium: 'max-w-2xl',
	large: 'max-w-5xl',
})[width];

const Entry = ({
	className = '', name, importName, isPadded = true,
	width = 'auto', path = 'components', children,
}: EntryProperties): JSX.Element => {
	const [state, setState] = useState({
		highlighted: false,
	});

	useEffect(() => {
		setState({
			highlighted: window.location.hash.slice(INDEX_AFTER_HASH) === importName,
		});
	}, [setState, importName]);

	return (
		<section>
			<div
				className={`block p-4 shadow-lg ${state.highlighted ? 'bg-yellow-100' : 'bg-gray-100'}`}
				id={importName}
			>
				<h2 className="font-bold tracking-wide text-xl space-x-2">
					<span>{name}</span>
					<a href={`#${importName}`}>🔗</a>
				</h2>
				<span className="inline-block mt-2 font-mono text-xs bg-gray-800 text-gray-100 px-2 py-1 rounded">
					{`import {${importName}} from '@app/${path}';`}
				</span>
			</div>
			<div className={collapse([`my-8 ${isPadded ? 'px-8' : ''}`, getWidthClass(width), className])}>
				{children}
			</div>
		</section>
	);
};

export default Entry;

export type {
	Width,
	EntryProperties as EntryProps,
};
