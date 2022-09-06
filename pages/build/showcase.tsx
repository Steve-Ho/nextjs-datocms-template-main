/* eslint-disable max-len */
import type {GetStaticProps} from 'next';
import {
	CheckCircleIcon, ChevronRightIcon, FingerPrintIcon, FireIcon, VolumeOffIcon,
} from '@heroicons/react/solid';
import {Entry} from '@app/components/showcase';
import {
	Heading, Text, Button, Input, Textarea, Select, Card, Tab, Accordion, Radio, Checkbox,
} from '@app/components';
import {revalidateSuccess} from '@app/library';

const entryClasses = 'flex flex-col space-y-4';

const HeadingComponent = (): JSX.Element => (
	<Entry className={entryClasses} name="Heading" importName="Heading">
		<Heading label="Headline" variant="headline" element="p"/>
		<Heading label="Heading one" variant="heading-one" element="h1"/>
		<Heading label="Heading two" variant="heading-two" element="h2"/>
		<Heading label="Heading three" variant="heading-three" element="h3"/>
		<Heading label="Heading four" variant="heading-four" element="h4"/>
		<Heading label="Heading five" variant="heading-five" element="h5"/>
		<Heading label="Heading six" variant="heading-six" element="h6"/>
		<Heading label="Subheading" variant="subheading" element="p"/>
	</Entry>
);

const TextComponent = (): JSX.Element => (
	<Entry className={entryClasses} width="medium" name="Text" importName="Text">
		<Text variant="text-lead" element="p">
			Paragraph Lead — Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</Text>
		<Text variant="text-regular" element="p">
			Paragraph Regular — Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</Text>
		<Text variant="text-small" element="p">
			Paragraph Small — Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</Text>
	</Entry>
);

const ButtonComponent = (): JSX.Element => (
	<Entry className={entryClasses} name="Button" importName="Button">
		<div className="flex items-center space-x-4">
			<Button.Semantic variant="primary" size="large" label="Large"/>
			<Button.Semantic variant="primary" size="regular" label="Regular"/>
			<Button.Semantic variant="primary" size="small" label="Small"/>
		</div>
		<div className="flex items-center space-x-4">
			<Button.Semantic variant="secondary" size="large" label="Large"/>
			<Button.Semantic variant="secondary" size="regular" label="Regular"/>
			<Button.Semantic variant="secondary" size="small" label="Small"/>
		</div>
		<div className="flex items-center space-x-4">
			<Button.Semantic variant="tertiary" size="large" label="Large"/>
			<Button.Semantic variant="tertiary" size="regular" label="Regular"/>
			<Button.Semantic variant="tertiary" size="small" label="Small"/>
		</div>
		<div className="flex items-center space-x-4">
			<Button.Semantic variant="primary" size="large" label="Large" icon={{svg: CheckCircleIcon}}/>
			<Button.Semantic variant="primary" size="regular" label="Regular" icon={{svg: CheckCircleIcon}}/>
			<Button.Semantic variant="primary" size="small" label="Small" icon={{svg: CheckCircleIcon}}/>
		</div>
		<div className="flex items-center space-x-4">
			<Button.Semantic variant="secondary" size="large" label="Large" icon={{svg: CheckCircleIcon}}/>
			<Button.Semantic variant="secondary" size="regular" label="Regular" icon={{svg: CheckCircleIcon}}/>
			<Button.Semantic variant="secondary" size="small" label="Small" icon={{svg: CheckCircleIcon}}/>
		</div>
		<div className="flex items-center space-x-4">
			<Button.Semantic variant="tertiary" size="large" label="Large" icon={{svg: CheckCircleIcon}}/>
			<Button.Semantic variant="tertiary" size="regular" label="Regular" icon={{svg: CheckCircleIcon}}/>
			<Button.Semantic variant="tertiary" size="small" label="Small" icon={{svg: CheckCircleIcon}}/>
		</div>
		<div className="flex items-center space-x-4">
			<Button.Semantic variant="primary" size="large" label="Large" icon={{svg: CheckCircleIcon, alignment: 'right'}}/>
			<Button.Semantic variant="primary" size="regular" label="Regular" icon={{svg: CheckCircleIcon, alignment: 'right'}}/>
			<Button.Semantic variant="primary" size="small" label="Small" icon={{svg: CheckCircleIcon, alignment: 'right'}}/>
		</div>
		<div className="flex items-center space-x-4">
			<Button.Semantic variant="secondary" size="large" label="Large" icon={{svg: CheckCircleIcon, alignment: 'right'}}/>
			<Button.Semantic variant="secondary" size="regular" label="Regular" icon={{svg: CheckCircleIcon, alignment: 'right'}}/>
			<Button.Semantic variant="secondary" size="small" label="Small" icon={{svg: CheckCircleIcon, alignment: 'right'}}/>
		</div>
		<div className="flex items-center space-x-4">
			<Button.Semantic variant="tertiary" size="large" label="Large" icon={{svg: CheckCircleIcon, alignment: 'right'}}/>
			<Button.Semantic variant="tertiary" size="regular" label="Regular" icon={{svg: CheckCircleIcon, alignment: 'right'}}/>
			<Button.Semantic variant="tertiary" size="small" label="Small" icon={{svg: CheckCircleIcon, alignment: 'right'}}/>
		</div>
	</Entry>
);

const InputComponent = (): JSX.Element => (
	<Entry className={entryClasses} width="small" name="Input" importName="Input">
		{/* ℹ️  Vanilla */}
		<Input required id="1" label="Name" placeholder="Jon Snow"/>
		{/* ℹ️  Specified 'type' */}
		<Input id="1" type="password" label="Password"/>
		{/* ℹ️  Specified 'type' */}
		<Input id="1" type="date" label="Publish date"/>
		{/* ℹ️  Disabled */}
		<Input disabled id="1" type="date" label="Publish date"/>
		{/* ℹ️  Displaying help text */}
		<Input id="1" label="Name" defaultValue="Arya" helpText="What would you like us to call you?"/>
		{/* ℹ️  Displaying error */}
		<Input id="1" label="Name" error="First name cannot contain mathematical equations"/>
	</Entry>
);

const TextareaComponent = (): JSX.Element => (
	<Entry className={entryClasses} width="small" name="Textarea" importName="Textarea">
		{/* ℹ️  Vanilla */}
		<Textarea required id="1" label="Description" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit..."/>
		{/* ℹ️  Displaying help text */}
		<Textarea id="1" label="Description" defaultValue="Arya" helpText="Tell us a story"/>
		{/* ℹ️  Disabled */}
		<Textarea
			disabled
			id="1"
			label="Description"
			defaultValue="Arya"
			helpText="Tell us a story"
		/>
		{/* ℹ️  Displaying error */}
		<Textarea id="1" label="Description" error="Description must contain at least 3 dragon references"/>
	</Entry>
);

const selectOptions = [
	{key: '1', label: 'Daenerys Targaryen'},
	{key: '2', label: 'Jon Snow'},
	{key: '3', label: 'Arya Stark'},
	{key: '4', label: 'Brandon Stark'},
	{key: '5', label: 'Tyrion Lannister'},
];

const SelectComponent = (): JSX.Element => (
	<Entry className={entryClasses} width="small" name="Select" importName="Select">
		{/* ℹ️  Vanilla */}
		<Select id="1" label="Character" options={selectOptions}/>
		{/* ℹ️  With placeholder option */}
		<Select
			required
			id="1"
			label="Character"
			placeholder="Select a character..."
			options={selectOptions}
		/>
		{/* ℹ️  Disabled */}
		<Select
			disabled
			id="1"
			label="Character"
			placeholder="Select a character..."
			options={selectOptions}
		/>
		{/* ℹ️  Displaying help text */}
		<Select
			required
			id="1"
			label="Character"
			placeholder="Select a character..."
			helpText="Who will become king or queen?"
			options={selectOptions}
		/>
		{/* ℹ️  Displaying error */}
		<Select
			required
			id="1"
			label="Character"
			placeholder="Select a character..."
			error="Please refer to season 8"
			options={selectOptions}
		/>
	</Entry>
);

const WIDTH_FACTOR = 4;
const HEIGHT_FACTOR = 3;

const cardDetails = {
	image: {
		src: 'https://picsum.photos/id/216/500/375',
		aspectRatio: WIDTH_FACTOR / HEIGHT_FACTOR, // 1.333...
		width: 500,
	},
	heading: 'Lorem Ipsum Dolor',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
};

const extraLongContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const cardMetaButton = (
	<Button.Link
		href="#"
		label="Read more"
		variant="tertiary"
		size="small"
		icon={{svg: ChevronRightIcon, alignment: 'right'}}
	/>
);

const CardComponent = (): JSX.Element => (
	<Entry className={entryClasses} width="large" name="Card" importName="Card">
		{/* ℹ️  Vanilla grid of cards */}
		<div className="flex flex-wrap -m-4">
			<div className="w-full sm:w-1/2 md:w-1/3 p-4">
				<Card {...cardDetails}/>
			</div>
			<div className="w-full sm:w-1/2 md:w-1/3 p-4">
				<Card {...cardDetails}/>
			</div>
			<div className="w-full sm:w-1/2 md:w-1/3 p-4">
				<Card {...cardDetails}/>
			</div>
		</div>
		{/* ℹ️  Grid of framed cards */}
		<div className="bg-true-gray-200 p-8">
			<div className="flex flex-wrap -m-4">
				<div className="w-full sm:w-1/2 md:w-1/3 p-4">
					<Card isFramed {...cardDetails}/>
				</div>
				<div className="w-full sm:w-1/2 md:w-1/3 p-4">
					<Card isFramed {...cardDetails}/>
				</div>
				<div className="w-full sm:w-1/2 md:w-1/3 p-4">
					<Card isFramed {...cardDetails}/>
				</div>
			</div>
		</div>
		{/* ℹ️  Grid of cards with meta content aligned to the bottom of the row */}
		<div className="flex flex-wrap items-stretch -m-4">
			<div className="w-full sm:w-1/2 md:w-1/3 p-4">
				<Card hasAutoHeight {...cardDetails} content={extraLongContent} meta={cardMetaButton}/>
			</div>
			<div className="w-full sm:w-1/2 md:w-1/3 p-4">
				<Card hasAutoHeight {...cardDetails} meta={cardMetaButton}/>
			</div>
			<div className="w-full sm:w-1/2 md:w-1/3 p-4">
				<Card hasAutoHeight {...cardDetails} meta={cardMetaButton}/>
			</div>
		</div>
		{/* ℹ️  Grid of cards with meta content aligned to the bottom of the individual card's content */}
		<div className="flex flex-wrap items-stretch -m-4">
			<div className="w-full sm:w-1/2 md:w-1/3 p-4">
				<Card {...cardDetails} content={extraLongContent} meta={cardMetaButton}/>
			</div>
			<div className="w-full sm:w-1/2 md:w-1/3 p-4">
				<Card {...cardDetails} meta={cardMetaButton}/>
			</div>
			<div className="w-full sm:w-1/2 md:w-1/3 p-4">
				<Card {...cardDetails} meta={cardMetaButton}/>
			</div>
		</div>
	</Entry>
);

const TabComponent = (): JSX.Element => (
	<Entry className={entryClasses} width="medium" name="Tab" importName="Tab">
		{/* ℹ️  Vanilla tabs */}
		<Tab.Container>
			<Tab.Panel label="Daenerys Targaryen">
				<p>Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon&apos;s rebellion.</p>
			</Tab.Panel>
			<Tab.Panel label="Jon Snow">
				<p>Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. After successfully capturing a wight and presenting it to the Lannisters as proof that the Army of the Dead are real, Jon pledges himself and his army to Daenerys Targaryen.</p>
			</Tab.Panel>
			<Tab.Panel label="Arya Stark">
				<p>Arya Stark is the third child of Eddard Stark and Catelyn Stark. After narrowly escaping the persecution of House Stark by House Lannister, Arya is trained as a Faceless Man at the House of Black and White in Braavos, and uses her new skills to bring those who have wronged her family to justice.</p>
			</Tab.Panel>
		</Tab.Container>
		{/* ℹ️  Tabs with icons */}
		<Tab.Container>
			<Tab.Panel label="Daenerys Targaryen" icon={FingerPrintIcon}>
				<p>Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon&apos;s rebellion.</p>
			</Tab.Panel>
			<Tab.Panel label="Jon Snow" icon={FireIcon}>
				<p>Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. After successfully capturing a wight and presenting it to the Lannisters as proof that the Army of the Dead are real, Jon pledges himself and his army to Daenerys Targaryen.</p>
			</Tab.Panel>
			<Tab.Panel label="Arya Stark" icon={VolumeOffIcon}>
				<p>Arya Stark is the third child of Eddard Stark and Catelyn Stark. After narrowly escaping the persecution of House Stark by House Lannister, Arya is trained as a Faceless Man at the House of Black and White in Braavos, and uses her new skills to bring those who have wronged her family to justice.</p>
			</Tab.Panel>
		</Tab.Container>
	</Entry>
);

const AccordionComponent = (): JSX.Element => (
	<Entry className={entryClasses} width="medium" name="Accordion" importName="Accordion">
		{/* ℹ️  Vanilla accordion */}
		<Accordion.Container>
			<Accordion.Panel label="Daenerys Targaryen">
				<p>Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon&apos;s rebellion.</p>
			</Accordion.Panel>
			<Accordion.Panel label="Jon Snow">
				<p>Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. After successfully capturing a wight and presenting it to the Lannisters as proof that the Army of the Dead are real, Jon pledges himself and his army to Daenerys Targaryen.</p>
			</Accordion.Panel>
			<Accordion.Panel label="Arya Stark">
				<p>Arya Stark is the third child of Eddard Stark and Catelyn Stark. After narrowly escaping the persecution of House Stark by House Lannister, Arya is trained as a Faceless Man at the House of Black and White in Braavos, and uses her new skills to bring those who have wronged her family to justice.</p>
			</Accordion.Panel>
		</Accordion.Container>
		{/* ℹ️  Accordion with icons */}
		<Accordion.Container expandMode="single">
			<Accordion.Panel label="Daenerys Targaryen" icon={FingerPrintIcon}>
				<p>Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon&apos;s rebellion.</p>
			</Accordion.Panel>
			<Accordion.Panel label="Jon Snow" icon={FireIcon}>
				<p>Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. After successfully capturing a wight and presenting it to the Lannisters as proof that the Army of the Dead are real, Jon pledges himself and his army to Daenerys Targaryen.</p>
			</Accordion.Panel>
			<Accordion.Panel label="Arya Stark" icon={VolumeOffIcon}>
				<p>Arya Stark is the third child of Eddard Stark and Catelyn Stark. After narrowly escaping the persecution of House Stark by House Lannister, Arya is trained as a Faceless Man at the House of Black and White in Braavos, and uses her new skills to bring those who have wronged her family to justice.</p>
			</Accordion.Panel>
		</Accordion.Container>
		{/* ℹ️  Accordion that permits multiple panels to be open simultaneously */}
		<Accordion.Container expandMode="multiple">
			<Accordion.Panel label="Daenerys Targaryen">
				<p>Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon&apos;s rebellion.</p>
			</Accordion.Panel>
			<Accordion.Panel label="Jon Snow">
				<p>Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. After successfully capturing a wight and presenting it to the Lannisters as proof that the Army of the Dead are real, Jon pledges himself and his army to Daenerys Targaryen.</p>
			</Accordion.Panel>
			<Accordion.Panel label="Arya Stark">
				<p>Arya Stark is the third child of Eddard Stark and Catelyn Stark. After narrowly escaping the persecution of House Stark by House Lannister, Arya is trained as a Faceless Man at the House of Black and White in Braavos, and uses her new skills to bring those who have wronged her family to justice.</p>
			</Accordion.Panel>
		</Accordion.Container>
	</Entry>
);

const RadioComponent = (): JSX.Element => {
	return (
		<Entry name="Radio" importName="Radio">
			<Radio
				id="radio-1"
				label="Option One"
				name="RadioGroup1"
			/>
			<Radio
				required
				id="radio-2"
				label="Option Two"
				error="This field is required"
				name="RadioGroup1"
			/>
			<Radio
				id="radio-3"
				label="Option Three"
				helpText="This is your last option"
				name="RadioGroup1"
			/>
			<Radio
				disabled
				id="radio-4"
				label="Option Four"
				helpText="This opption is disabled"
			/>
		</Entry>
	);
};

const CheckboxComponent = (): JSX.Element => {
	return (
		<Entry name="Checkbox" importName="Checkbox">
			<Checkbox
				id="checkbox-1"
				label="Option One"
			/>
			<Checkbox
				required
				id="checkbox-2"
				label="Option Two"
				error="This option is required"
			/>
			<Checkbox
				id="checkbox-3"
				label="Option Three"
				helpText="This is your last option"
			/>
			<Checkbox
				disabled
				id="checkbox-4"
				label="Option Four"
				helpText="This opption is disabled"
			/>
		</Entry>
	);
};

const Showcase = (): JSX.Element => (
	<main>
		<HeadingComponent/>
		<TextComponent/>
		<ButtonComponent/>
		<InputComponent/>
		<TextareaComponent/>
		<SelectComponent/>
		<RadioComponent/>
		<CheckboxComponent/>
		<CardComponent/>
		<TabComponent/>
		<AccordionComponent/>
	</main>
);

const getStaticProps: GetStaticProps = () => revalidateSuccess();

export {
	getStaticProps,
};

export default Showcase;
