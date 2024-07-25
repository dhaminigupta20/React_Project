import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPieChart, faCog, faFolder, faUser, faSpinner, faBuilding, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import profileImage from './image/profile.jpg';
import './Sidebar.css';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={profileImage} alt="Profile Picture" />
        <span>Bruce Wayne</span>
      </div>
      <ul className="sidebar-nav">
        <li>
          <Link to="/overview">
            <FontAwesomeIcon icon={faPieChart} />Overview
          </Link>
        </li>
        <li>
          <Link to="/organization">
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
            <FontAwesomeIcon icon={faBuilding} /> Organization
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
            <FontAwesomeIcon icon={faFolder} /> Projects
          </Link>
        </li>
        <li>
          <Link to="/people" target="_blank"> {/* Link to people page */}
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
            <FontAwesomeIcon icon={faUser} />People
          </Link>
        </li>
        <li>
          <Link to="/example">
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
            <FontAwesomeIcon icon={faSpinner} /> Example
          </Link>
        </li>
        <ul className="nested-list">
          <span>Pages</span>
          <li>
            <Link to="/settings">
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <FontAwesomeIcon icon={faCog} /> Settings
            </Link>
          </li>
          <li>
            <Link to="/example">
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <FontAwesomeIcon icon={faSpinner} /> Example
            </Link>
          </li>
          <li>
            <Link to="/example">
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <FontAwesomeIcon icon={faSpinner} /> Example
            </Link>
          </li>
          <li>
            <Link to="/example">
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
              <FontAwesomeIcon icon={faSpinner} /> Example
            </Link>
          </li>
        </ul>
      </ul>
    </div>
    
  );
}
export default Sidebar;










