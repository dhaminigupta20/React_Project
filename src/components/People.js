import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight, faPieChart, faExclamationCircle, faCheckCircle, faTimesCircle, faSpinner, faBug, faUserPlus, faUserCheck, faClock, faFolder, faBuilding, faCog, faPlus, faMinus, faArrowUp, faArrowDown, faSearch, faBell, faPaperPlane, faCalendarAlt, faCheck, faDotCircle, faPhone, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './People.css';
import profileImage from './image/profile.jpg';
// import Sidebar from './Sidebar';

function People() {
  const [users, setUsers] = useState([
    { id: '#CM9801', name: 'Natali Craig', project: 'Landing Page', email: 'natalicr@mail.com', date: 'Just now', status: 'In Progress' },
    { id: '#CM9801', name: 'Kate Morrison', project: 'CRM Admin pages', email: 'katemorr@gmail.com', date: 'A minute ago', status: 'Complete' },
    { id: '#CM9801', name: 'Drew Cano', project: 'Client Project', email: 'bagwell@mail.co', date: '1 hour ago', status: 'Pending' },
    { id: '#CM9801', name: 'Natali Craig', project: 'Admin Dashboard', email: 'washburnbaton@o..', date: 'Yesterday', status: 'Approved' },
    { id: '#CM9801', name: 'Andi Lane', project: 'App Landing Page', email: 'nest32@gmail.com', date: 'Feb 2, 2024', status: 'Rejected' },
    { id: '#CM9801', name: 'Orlando Diggs', project: 'Landing Page', email: 'meadow_oakland....', date: 'Just now', status: 'Call' },
    { id: '#CM9801', name: 'Kate Morrison', project: 'CRM Admin pages', email: 'example@mail.com', date: 'A minute ago', status: 'Schedule' },
    { id: '#CM9801', name: 'Drew Cano', project: 'Client Project', email: 'example@mail.com', date: '1 hour ago', status: 'Approved' },
    { id: '#CM9801', name: 'Kate Morrison', project: 'Admin Dashboard', email: 'example@mail.com', date: 'Yesterday', status: 'Pending' },
    { id: '#CM9801', name: 'Orlando Diggs', project: 'App Landing Page', email: 'example@mail.com', date: 'Feb 2, 2024', status: 'In Progress' },
  ]);

  const navigate = useNavigate();
  // navigate('/new-path');

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const handleSort = (key) => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    setUsers(sortedUsers);
  };

  const handleSearch = (query) => {
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(query.toLowerCase()) || user.project.toLowerCase().includes(query.toLowerCase());
    });
    setUsers(filteredUsers);
  };

  const usersPerPage = 5;
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  return (
    <div className="container">
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
            <Link to="/people" > {/* Link to people page */}
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
        </ul>
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
      </div>
      <div className="main">
        <div className="header">
          <div className="title">Dashboards / People</div>
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
          </div>
          {/* <div>
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faMinus} />
            <FontAwesomeIcon icon={faArrowUp} />
          </div> */}
        </div>
        <div className="content">
          <div className="user-list">
            <div className="user-list-header">
              <div className="user-list-title">User List</div>
              <div className="user-list-actions">
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon icon={faArrowUp} />
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')}>User ID</th>
                  <th onClick={() => handleSort('name')}>User</th>
                  <th onClick={() => handleSort('project')}>Project</th>
                  <th onClick={() => handleSort('email')}>Email</th>
                  <th onClick={() => handleSort('date')}>Date</th>
                  <th onClick={() => handleSort('status')}>Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <div className="user-info">
                        <img src="https://via.placeholder.com/50" alt="User" />
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td>{user.project}</td>
                    <td>{user.email}</td>
                    <td>{user.date}</td>
                    <td>
                      <div className="status">
                        {user.status === 'In Progress' && <FontAwesomeIcon icon={faDotCircle} className="in-progress" />}
                        {user.status === 'Complete' && <FontAwesomeIcon icon={faDotCircle} className="complete" />}
                        {user.status === 'Pending' && <FontAwesomeIcon icon={faDotCircle} className="pending" />}
                        {user.status === 'Approved' && <FontAwesomeIcon icon={faDotCircle} className="approved" />}
                        {user.status === 'Rejected' && <FontAwesomeIcon icon={faDotCircle} className="rejected" />}
                        {user.status === 'Call' && (
                          <>
                            <FontAwesomeIcon icon={faPhone} className="call" />
                            <span>Call</span>
                          </>
                        )}
                        {user.status === 'Schedule' && (
                          <>
                            <FontAwesomeIcon icon={faCalendarAlt} className="schedule" />
                            <span>Schedule</span>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            )}
            {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
              <button key={i + 1} onClick={() => handlePageChange(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
                {i + 1}
              </button>
            ))}
            {currentPage < Math.ceil(users.length / usersPerPage) && (
              <button onClick={() => handlePageChange(currentPage + 1)}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
