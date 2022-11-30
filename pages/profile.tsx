import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SignIn from '../components/signIn';
import MaterialTable from '../components/materialTable';
import { AuthContextProvider } from '../firebase/initAuth';

export default function Home() {
	const { user } = AuthContextProvider();

	const largeImg = (url) => {
		var img = '';
		img = url.replace('s96-c', 's400-c');
		return img;
	};

	return (
		<div className="">
			<Head>
				<title>Profile</title>
				<meta
					name="description"
					content="SK Cleaning, the pool service for you"
				/>
				<link rel="icon" href="../public/favicon.ico" />
			</Head>

			<main className="px-10 min-h-screen">
				<div className="flex justify-center pt-16">
					<div className="max-w-md overflow-hidden">
						<div className='flex justify-center'>
							<Image
								className="rounded-full"
								src={user ? largeImg(user.photoURL) : ''}
								alt="users profile image"
								width={100}
								height={100}
							/>
						</div>

						<div className="px-6 py-4">
							<div className="flex justify-center font-bold text-xl mb-2">{user?.displayName}'s Profile</div>
							<p className="text-gray-200 text-base">
								{user.email}
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
