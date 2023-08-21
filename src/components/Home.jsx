import React from 'react';
import '../componentscss/Home.css';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

function Home() {
    return (
        <>
        <div className="home-container">
            <h1>Welcome to Our Job Portal</h1>
            <p>Find your dream job with us. Browse through various job listings and apply today!</p>
            <Link to="/jobs" className="button_job">Browse Jobs</Link>
        </div>
        <div className="box">
        <div className="container-Jobs">
            <div className='btn'>
            <button className="button-1">Apply</button>
            </div>
        </div>
        <div className="container-Jobs">
            <button className="button-1">Apply</button>
        </div>
        <div className="container-Jobs">
            <button className="button-1">Apply</button>
        </div>
        </div>
        </>
    );
}

export default Home;
