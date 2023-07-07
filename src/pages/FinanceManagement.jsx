import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Financemanagement.css";
import SearchBar from '../ReusableComponent/SearchBar';

const FinanceManagement = () => {
  // Example data for the table
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
        id: 1,
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
  const itemsPerPage = 5;
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);

  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="finance">
    <div className="title_finance" style={{marginTop:'30px',marginBottom:'30px',marginLeft:'20px'}}>
        <h3 style={{fontWeight:'bold',color:'black'}}>Manage finance</h3>
    </div>
    <div className="search-finance">
        <div className="top_div">
            <span>Search by Mobile Number</span>
            <input type="number" />
        </div>
        {/* <div className="bottom_div">
            <span id="filter">Filter by date Range:</span>
            <div className="right_div">
                <div className="from">
                <span>From</span>
                <input type="date" name="date" id="date" />
                </div>
                <div className="to">
                <span>To</span>
                <input type="date" name="date" id="date" />
                </div>
            </div>
        </div> */}
        <SearchBar/>
    </div>
    <div className="container mt-4">
      <table className="table table-striped table-hover">
        <thead className="thead-light">
          <tr>
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
            <tr key={data.id}>
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

      {/* <div className="button_download" style={{marginTop : "30px",marginBottom : '30px',float : 'right', marginRight : "30px"}}>
        <div className="btn btn-primary">Download Data in excel</div>
      </div> */}

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

// export default TableComponent;


export default FinanceManagement;