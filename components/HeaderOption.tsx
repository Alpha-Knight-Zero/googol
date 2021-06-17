import React from 'react';

const HeaderOption = ({ Icon, title }: { title: string; Icon: any }) => {
	return (
		<div
			className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-red-700 cursor-pointer pb-2 hover:border-red-700 ${
				title === 'All' && 'text-red-700 border-red-700'
			} `}
		>
			<Icon className='h-5' />
			<p className='hidden sm:inline-flex '>{title}</p>
		</div>
	);
};

export default HeaderOption;
