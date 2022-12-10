import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import brian from '../public/brian-40.jpg';
import ryan from '../public/ryan-r.jpg';

export default function Home() {
	const [team] = useState([
		{ first_name: 'Brian', last_name: 'G', email: 'brian@mail.com', pic: brian },
		{ first_name: 'Ryan', last_name: 'G', email: 'ryan@mail.com', pic: ryan },
	]);

	return (
		<div className="">
			<Head>
				<title>Team</title>
				<meta name="description" content="The pool service for you" />
				<link rel="icon" href="../public/favicon.svg" />
			</Head>

			<main className="px-10 min-h-screen">
				<div className="flex justify-center pt-16">
					{team.map((teamMember, i) => (
						<div
							key={i}
							className="max-w-md overflow-hidden rounded shadow-2xl mr-10"
						>
							<div className="flex justify-center">
								<Image
									className="h-24 w-24 object-contain"
									src={teamMember.pic}
									alt="users profile image"
									width={100}
									height={100}
								/>
							</div>
							<div className="px-6 py-4">
								<div className="flex justify-center font-bold text-xl mb-2">
									{teamMember.first_name + " " + teamMember.last_name}
								</div>
								<p className="text-gray-200 text-base">{teamMember.email}</p>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
