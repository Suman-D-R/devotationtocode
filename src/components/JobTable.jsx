import React from "react";
import "../componentscss/JobTable.css";
import {useParams} from "react-router-dom";
import jobs from '../Data/JobData';

const JobTable = () => {
  const { index } = useParams();
  
  const jobData = jobs[index];

  const handleApplyClick = () => {
    window.location.href = jobData.link;
  };

  return (
    <div className='JobTable'>
      <div className="title-1">
        <h1>{jobData.fulltitle}</h1>
      </div>
      <div className="about-short">
        <p>{jobData.about}</p>
      </div>
      <div className="aboutcompany">
        <h1>About Company</h1>
        <h2>{jobData.aboutcompany}</h2>
      </div>
      <div className="job-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Discription</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>post</td>
              <td>{jobData.post}</td>
            </tr>
            <tr>
              <td>Experience</td>
              <td>{jobData.Experience}</td>
            </tr>
            <tr>
              <td>Qualification</td>
              <td>{jobData.Qualification}</td>
            </tr>
            <tr>
              <td>year of pass</td>
              <td>{jobData.year}</td>
            </tr>
            <tr>
              <td>salary</td>
              <td>{jobData.salary}</td>
            </tr>
            <tr>
              <td>location</td>
              <td>{jobData.location}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='requriments'>
      <h2>Requriments</h2>
      <p>{jobData.requriments}</p>
      </div>
      <div className="button-link">
        <button onClick={handleApplyClick} >Apply</button>
      </div>
    </div>
  );
};

export default JobTable;
