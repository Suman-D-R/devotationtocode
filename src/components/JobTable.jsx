import React from "react";
import "../componentscss/JobTable.css";
import { useLocation } from "react-router-dom";

const JobTable = () => {
  const location = useLocation();

  const handleApplyClick = () => {
    window.location.href = location.state.link;
  };

  return (
    <div className='JobTable'>
      <div className="title-1">
        <h1>{location.state.fulltitle}</h1>
      </div>
      <div className="about-short">
        <p>{location.state.about}</p>
      </div>
      <div className="aboutcompany">
        <h1>About Company</h1>
        <h2>{location.state.aboutcompany}</h2>
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
              <td>{location.state.post}</td>
            </tr>
            <tr>
              <td>Experience</td>
              <td>{location.state.Experience}</td>
            </tr>
            <tr>
              <td>Qualification</td>
              <td>{location.state.Qualification}</td>
            </tr>
            <tr>
              <td>year of pass</td>
              <td>{location.state.year}</td>
            </tr>
            <tr>
              <td>salary</td>
              <td>{location.state.salary}</td>
            </tr>
            <tr>
              <td>location</td>
              <td>{location.state.location}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='requriments'>
      <h2>Requriments</h2>
      <p>{location.state.requriments}</p>
      </div>
      <div className="button-link">
        <button onClick={handleApplyClick} >Apply</button>
      </div>
    </div>
  );
};

export default JobTable;
