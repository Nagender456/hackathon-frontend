import React from 'react';

const Home = () => {
	return (
		<section className='page-container home-screen'>
			<h1 className='home-screen-heading'>LearnFeed</h1>
			<img className='home-screen-logo' src='/only-logo.png'></img>
			<p>{"Prepare today, Get rewarded tomorrow!"}</p>
			<button className='home-screen-button'>Explore Feeds</button>
		</section>
	);
}

export default Home;