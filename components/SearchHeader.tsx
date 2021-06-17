import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const SearchHeader = () => {
	const router = useRouter();
	const searchInputReaf = useRef(null);

	const Search = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		e.preventDefault();

		const term = searchInputReaf.current.value;
		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<header className='sticky top-0 bg-purple-200'>
			<div className='w-full flex p-6 items-center'>
				<Image
					height={40}
					width={120}
					src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
					loading='lazy'
					onClick={() => router.push('/')}
					className='cursor-pointer'
				></Image>
				<form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-purple-400 rounded-full shadow-lg max-w-3xl'>
					<input
						ref={searchInputReaf}
						className='focus:outline-none flex-grow bg-purple-200 w-full'
						type='text'
					/>
					<XIcon
						className='h-7 sm:mr-3 ml-1 cursor-pointer text-purple-700 transition duration-100 transform hover:scale-110'
						onClick={() => {
							searchInputReaf.current.value = '';
						}}
					/>
					<MicrophoneIcon className='mr-2 h-6 hidden sm:inline-flex text-red-600 pl-3 border-l-2 border-purple-400' />
					<SearchIcon className='h-6 hidden sm:inline-flex text-purple-700 ' />
					<button className='hidden' type='submit' onClick={Search}>
						Search
					</button>
				</form>
				<Avatar
					extraClassNames='ml-auto'
					url='https://media-exp1.licdn.com/dms/image/C4E03AQGCn7ksTRacCg/profile-displayphoto-shrink_400_400/0/1613084169365?e=1629331200&v=beta&t=JkJ_AStqJVNexp3ikhiiUcgU9vW0moX4dRyZmlWQvBA'
				/>
			</div>
			<HeaderOptions></HeaderOptions>
		</header>
	);
};

export default SearchHeader;
