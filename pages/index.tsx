import { Microphone, SearchOutline, ViewGrid } from 'heroicons-react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

const index = (): JSX.Element => {
	const router = useRouter();
	const searchInputref = useRef(null);
	const Search = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		e.preventDefault();
		const term = searchInputref.current.value;

		if (!term) return;

		router.push(`/search?term=${term}&start=${0}`);
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<Head>
				<title>Googol</title>
				<meta name='Googol made by Pushkal Pandey' />
			</Head>

			<header className='flex w-full justify-between p-5 text-sm text-black bg-purple-300'>
				<div className='flex space-x-4 items-center'>
					<p className='link'>About</p>
					<p className='link'>Store</p>
				</div>
				<div className='flex space-x-4 items-center'>
					<p className='link'>Gmail</p>
					<p className='link'>Images</p>

					<ViewGrid className='h-10 w-10 p-2 rounded-full hover:bg-purple-400 cursor-pointer' />

					<Avatar url='https://media-exp1.licdn.com/dms/image/C4E03AQGCn7ksTRacCg/profile-displayphoto-shrink_400_400/0/1613084169365?e=1629331200&v=beta&t=JkJ_AStqJVNexp3ikhiiUcgU9vW0moX4dRyZmlWQvBA' />
				</div>
			</header>

			<form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
				<Image
					src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
					width={300}
					height={100}
					loading='lazy'
				/>
				<div className='flex w-full mt-5 hover:shadow-lg bg-purple-200 focus-within:shadow-lg max-w-md items-center rounded-full border border-purple-400 px-3 py-2 sm:max-w-xl md:mmax-w-2xl '>
					<SearchOutline className='h-5 mr-1 text-black ' />
					<input
						ref={searchInputref}
						type='text'
						className='focus:outline-none flex-grow bg-purple-200'
					/>
					<Microphone className='h-5 ml-1 text-black ' />
				</div>
				<div className='flex flex-col w-1/2 space-y-3 justify-center mt-7 sm:space-y-0 sm:flex-row sm:space-x-9 '>
					<button className='btn ' onClick={Search}>
						Google Search
					</button>
					<button className='btn ' onClick={Search}>
						You're Special
					</button>
				</div>
			</form>
			<Footer />
		</div>
	);
};

export default index;

// export const getStaticProps = async (context) => {

// };

// export const getStaticPaths = async () => {

// };

// export const getServerSideProps = async (context) => {

// };
