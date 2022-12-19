import Head from 'next/head';
import CustomerGrid from '../components/customerGrid';

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Blue Water Pool</title>
				<meta name="description" content="The pool service for you" />
				<link rel="icon" href="../public/favicon.ico" />
			</Head>


			<main className="px-10">
				<div className="p-10">{<CustomerGrid />}</div>
			</main>
		</div>
	);
}
