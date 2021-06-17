import HeaderOption from './HeaderOption';
import {
	DotsVerticalIcon,
	MapIcon,
	NewspaperIcon,
	PhotographIcon,
	PlayIcon,
	SearchIcon,
} from '@heroicons/react/outline';

const HeaderOptions = () => {
	const icons = [
		SearchIcon,
		PhotographIcon,
		PlayIcon,
		NewspaperIcon,
		MapIcon,
		DotsVerticalIcon,
	];

	const titles = ['All', 'Images', 'Videos', 'News', 'Maps', 'More'];
	return (
		<div className='flex w-full text-purple-900 justify-evenly text-sm sm:text-base lg:justify-start sm:space-x-16 lg:space-x-36 lg:pl-52 border-b'>
			<div className='flex space-x-5'>
				{titles.map((title, key) => (
					<HeaderOption Icon={icons[key]} title={title} key={key} />
				))}
			</div>
			<div className='flex space-x-5'>
				<p className='link'>Settings</p>
				<p className='link'>Tools</p>
			</div>
		</div>
	);
};

export default HeaderOptions;
