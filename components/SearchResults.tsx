import PaginationButtons from './PaginationButtons';

const SearchResults = ({ results }) => {
	return (
		<div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52  '>
			<p className='text-black mb-5 text-md mt-3 whitespace-nowrap'>
				About {results.searchInformation?.formattedTotalResults} results
				in {results.searchInformation?.formattedSearchTime} seconds.
			</p>
			{results.items?.map((res) => (
				<div key={res.link} className='max-w-xl mb-8'>
					<div className='group  '>
						<a
							href={res.link}
							className='text-sml whitespace-nowrap'
						>
							<p className='truncate'>{res.formattedUrl}</p>
						</a>
						<a href={res.link}>
							<p className='truncate text-xl text-red-700 font-medium group-hover:underline'>
								{res.title}
							</p>
						</a>
					</div>
					<p className='line-clamp-3'>{res.snippet}</p>
				</div>
			))}
			<PaginationButtons />
		</div>
	);
};

export default SearchResults;
