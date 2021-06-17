import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import Response from './../Response';

const API_KEY = process.env.API_KEY;

const CONTEXT_KEY = process.env.CONTEXT_KEY;

const search = ({ results }) => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.term} - Googol Search</title>
				<meta name='Googol search result page made by Pushkal Pandey' />
			</Head>
			<SearchHeader />
			<SearchResults results={results} />
		</div>
	);
};

export default search;

export const getServerSideProps = async (context: {
	query: { term: string; start: Number };
}): Promise<{ props: { results: void } }> => {
	const useDummyData = false;

	const startIndex = context.query.start || '0';

	const query = context.query.term;

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}&start=${startIndex} `
		  ).then((res) => res.json());

	return {
		props: {
			results: data,
		},
	};
};

// export const getStaticProps = async (context) => {

// };

// export const getStaticPaths = async () => {

// };
