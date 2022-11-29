import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SignIn from '../components/signIn';
import MaterialTable from '../components/materialTable';
import { AuthContextProvider } from '../firebase/initAuth';

export default function Home() {
	const { user } = AuthContextProvider();

	const largeImg = (url) => {
		var img = "";
		img = url.replace("s96-c", "s400-c")
		return img
	}

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

			<main className="px-10 m-h-screen">
				<div className="flex justify-center">
					<div className='flex'>
						<Image
							className="rounded-full"
							src={user ? largeImg(user.photoURL) : ''}
							alt="users profile image"
							width={100}
							height={100}
						/>
					</div>
					<div className="flex">{user?.displayName}</div>
					<div className="flex">{user?.email}</div>
				</div>
			</main>
		</div>
	);
}
