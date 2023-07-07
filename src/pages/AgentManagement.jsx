import React from "react";
import '../styles/Agentmanagement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

const AgentManagement = () => {

  const tableData = [
    {
      id: 1,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 2,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 3,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 4,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 5,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 6,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 7,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 8,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 9,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 10,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 11,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    {
      id: 12,
      fullName: 'John Doe',
      mobileNumber: '1234567890',
      registrationDate: '2023-06-17',
      creditUsed: 50,
      creditRemaining: 50,
      totalPropertyViewed: 10,
      status: 'Active',
    },
    // Add more data objects as needed
  ];
  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);

  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let navigate = useNavigate();
  let UserDetails = () => {
    navigate("/agent/123");
  }

  return (
    <div className="agent">

      <div className="container mt-4">
      <table className="table table-striped table-hover">
        <thead className="thead-light">
          <tr>
            <th>S.No</th>
            <th>FullName</th>
            <th>Mobile Number</th>
            <th>Registration Date</th>
            <th>Credit Used</th>
            <th>Credit Remaining</th>
            <th>Total Property viewed</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.slice(startIndex, endIndex).map((data) => (
            <tr key={data.id} onClick={UserDetails}>
              <td>{data.id}</td>
              <td>{data.fullName}</td>
              <td>{data.mobileNumber}</td>
              <td>{data.registrationDate}</td>
              <td>{data.creditUsed}</td>
              <td>{data.creditRemaining}</td>
              <td>{data.totalPropertyViewed}</td>
              <td>{data.status}</td>
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default AgentManagement;
