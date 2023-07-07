import React from "react";
import { useNavigate } from "react-router-dom";

const ApprovalManagement = () => {
  const tableData = [
    {
      id: 1,
      UserId: 101,
      name: "JohnDoe",
      mobileNumber: "1234567890",
      email: "JohnDoe@mail.com",
      propertyName: "JohnDoe Villa",
      status: "Active",
    },
    {
      id: 2,
      UserId: 101,
      name: "MaryDoe",
      mobileNumber: "1234567890",
      email: "JohnDoe@mail.com",
      propertyName: "JohnDoe Villa",
      status: "Active",
    },
    {
      id: 3,
      UserId: 101,
      name: "JohnDoe",
      mobileNumber: "1234567890",
      email: "JohnDoe@mail.com",
      propertyName: "JohnDoe Villa",
      status: "Active",
    },
    {
      id: 4,
      UserId: 101,
      name: "JohnDoe",
      mobileNumber: "1234567890",
      email: "JohnDoe@mail.com",
      propertyName: "JohnDoe Villa",
      status: "Active",
    },
    {
      id: 5,
      UserId: 101,
      name: "JohnDoe",
      mobileNumber: "1234567890",
      email: "JohnDoe@mail.com",
      propertyName: "JohnDoe Villa",
      status: "Active",
    },
    {
      id: 6,
      UserId: 101,
      name: "JohnDoe",
      mobileNumber: "1234567890",
      email: "JohnDoe@mail.com",
      propertyName: "JohnDoe Villa",
      status: "Active",
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

  let Navigate = useNavigate();
  let NavigateToapproval = () => {
    Navigate('/approval/:id');
  }
  return (
    <div>
      <div
        className="title_Approval"
        style={{ marginTop: "30px", marginBottom: "30px", marginLeft: "20px" }}
      >
        <h3 style={{ fontWeight: "bold", color: "black" }}>
          Approval Requested
        </h3>
      </div>
      <div className="search-finance">
      </div>
      <div className="container mt-4">
        <table className="table table-striped table-hover">
          <thead className="thead-light">
            <tr>
              <th>S.no</th>
              <th>UserId</th>
              <th>UserName</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Property name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(startIndex, endIndex).map((data) => (
              <tr key={data.id} onClick={NavigateToapproval}>
                <td>{data.id}</td>
                <td>{data.UserId}</td>
                <td>{data.name}</td>
                <td>{data.mobileNumber}</td>
                <td>{data.email}</td>
                <td>{data.propertyName}</td>
                <td>{data.status}</td>
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
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
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

export default ApprovalManagement;
