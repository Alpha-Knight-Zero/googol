const Avatar = ({
	url,
	extraClassNames,
}: {
	url?: string;
	extraClassNames?: string;
}): JSX.Element => {
	return (
		<img
			loading='lazy'
			src={url}
			className={`rounded-full h-10 w-10 cursor-pointer transition duration-125 transform hover:scale-125 ${extraClassNames}`}
			alt='Profile Picture'
		/>
	);
};

export default Avatar;
