import { Globe } from 'heroicons-react';

const Footer = () => {
	return (
		<footer className='grid w-full divide-y-2 divide-purple-200 bg-purple-300 text-sm '>
			<div className='px-5 py-3 flex flex-row justify-center'>
				<p className='mr-auto'>Bharatvarsha</p>
				<p className='ml-auto'>Pushkal Pandey</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 grid-flow-row-dense mb-2'>
				<div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2'>
					<Globe className='h-5 mr-1' />
					<p className='link'>World is One since Satyuga</p>
				</div>
				<div className='flex space-x-9 justify-center items-center whitespace-nowrap md:justify-self-start '>
					<p className='link'>Advertising</p>
					<p className='link'>Business</p>
					<p className='link'>How Search works</p>
				</div>
				<div className='flex space-x-9 justify-center whitespace-nowrap md:ml-auto '>
					<p className='link'>Privacy</p>
					<p className='link'>Terms</p>
					<p className='link'>Settings</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
