import {useState, useCallback, useEffect, useMemo} from 'react';
import * as React from 'react';
import {isNil, isObject, isString} from 'remeda';
import {notNil} from '@growthops/ext-ts';

type RegisteredPanel = {
	label: string;
	icon?: React.ElementType;
};

type ContainerState = {
	registeredPanels: RegisteredPanel[];
	activePanel?: string;
};

type ContainerProperties = {
	children: JSX.Element[];
};

type PanelProperties = {
	children: JSX.Element | JSX.Element[];
	// eslint-disable-next-line react/no-unused-prop-types
	label: string;
	// eslint-disable-next-line react/no-unused-prop-types
	icon?: React.ElementType;
};

const generateContainerButtonClasses = (isActive: boolean): string => `
	flex
	items-center
	space-x-2
	flex-grow
	text-left
	subheading
	py-2
	border-b-2
	${isActive ? 'border-true-gray-400' : 'border-true-gray-200'}
	${isActive ? '' : 'text-true-gray-400'}
`;

const FIRST_ARRAY_ITEM = 0;

const Container = ({children}: ContainerProperties): JSX.Element => {
	const [state, setState] = useState<ContainerState>({
		registeredPanels: [],
		activePanel: undefined,
	});

	useEffect(() => {
		if (isNil(children)) {
			return;
		}

		const panels = React.Children
			.map(children, child => {
				const properties = child.props as unknown;

				if (isObject(properties) && isString(properties.label)) {
					return {
						label: properties.label,
						icon: properties.icon as React.ElementType | undefined,
					};
				}
			})
			.filter(panel => notNil(panel));

		setState({
			activePanel: panels[FIRST_ARRAY_ITEM]?.label ?? undefined,
			registeredPanels: panels,
		});
	}, [children]);

	const handleActivePanelChange = useCallback((label: string) => (): void => {
		setState(current => ({
			...current,
			activePanel: label,
		}));
	}, []);

	const panelButtons = useMemo(() => state.registeredPanels.map(({label, icon: Icon}) => (
		<button
			key={label}
			className={generateContainerButtonClasses(state.activePanel === label)}
			type="button"
			onClick={handleActivePanelChange(label)}
		>
			{!isNil(Icon) && (
				<Icon className="w-5"/>
			)}
			<span>{label}</span>
		</button>
	)), [handleActivePanelChange, state.activePanel, state.registeredPanels]);

	return (
		<section>
			<header className="flex items-center">
				{panelButtons}
			</header>
			{React.Children.map(children, child => {
				const properties = child.props as unknown;

				if (isObject(properties) && notNil(properties.label) && properties.label === state.activePanel) {
					return child;
				}
			})}
		</section>
	);
};

const Panel = ({children}: PanelProperties): JSX.Element => {
	return (
		<article className="mt-4">
			{children}
		</article>
	);
};

const Tab = {
	Container,
	Panel,
};

export default Tab;

export type {
	RegisteredPanel,
	ContainerState,
	ContainerProperties as ContainerProps,
	PanelProperties as PanelProps,
};
