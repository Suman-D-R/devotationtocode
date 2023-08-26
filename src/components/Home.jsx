import React from 'react';
import '../componentscss/Home.css';
import { Link } from 'react-router-dom';
import jobs from '../Data/JobData';


function Home() {

    return (
        <>
            <div className="home-container">
                <h1>Welcome to Our Job Portal</h1>
                <p>Find your dream job with us. Browse through various job listings and apply today!</p>
                <Link to="/jobs" className="button_job">Browse Jobs</Link>
            </div>
            <div className="box">
                {
                    jobs.map((job,index) =>
                        <div className="container-Jobs">
                            <div className='title'><h1>{job.title}</h1>
                                <p>
                                    {job.post}
                                </p>
                                <p>{job.Qualification}</p>
                                </div>
                            <div className='btn'>
                            <Link to={`/JobTable/${index}`} className="button-1">Apply</Link>
                            </div>
                        </div>)
                }
            </div>
            <div></div>

        </>
    );
}

export default Home;
