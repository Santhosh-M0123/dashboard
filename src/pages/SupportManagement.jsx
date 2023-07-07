import React from 'react'

const SupportManagement = () => {
    const tableData = [
        {
          id: 1,
          tokenId : 5486,
          name : "JohnDoe",
          UserId: 101,
          mobileNumber: '1234567890',
          email : 'JohnDoe@mail.com',
          registrationDate: '2023-06-17',
          status: 'Active',
        },
        {
            id: 2,
            tokenId : 5486,
          name : "MarryDoe",
          UserId: 101,
          mobileNumber: '7536458912',
          email : 'JohnDoe@mail.com',
          registrationDate: '2023-06-17',
          status: 'Active',
          },
          {
            id: 3,
            tokenId : 5486,
          name : "SuryaVelan",
          UserId: 101,
          mobileNumber: '7531598525',
          email : 'JohnDoe@mail.com',
          registrationDate: '2023-06-17',
          status: 'Active',
          },
          {
            id: 4,
            tokenId : 5486,
          name : "IronMan",
          UserId: 101,
          mobileNumber: '789456123',
          email : 'JohnDoe@mail.com',
          registrationDate: '2023-06-17',
          status: 'Active',
          },
          {
            id: 5,
            tokenId : 5486,
            name : "JohnCena",
            UserId: 101,
            mobileNumber: '8453254963',
            email : 'JohnDoe@mail.com',
            registrationDate: '2023-06-17',
            status: 'Active',
          },
          {
            id: 6,
            tokenId : 5486,
            name : "David",
            UserId: 101,
            mobileNumber: '885694256',
            email : 'JohnDoe@mail.com',
            registrationDate: '2023-06-17',
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
  return (
    <div>
        <div className="title_support" style={{marginTop:'30px',marginBottom:'30px',marginLeft:'20px'}}>
        <h3 style={{fontWeight:'bold',color:'black'}}>Support Requested</h3>
    </div>
    <div className="search-finance">
    </div>
    <div className="container mt-4">
      <table className="table table-striped table-hover">
        <thead className="thead-light">
          <tr>
            <th>S.no</th>
            <th>Token</th>
            <th>UserName</th>
            <th>UserId</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Date/time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.slice(startIndex, endIndex).map((data) => (
            <tr key={data.id}>
                <td>{data.id}</td>
              <td>{data.tokenId}</td>
              <td>{data.name}</td>
              <td>{data.UserId}</td>
              <td>{data.mobileNumber}</td>
              <td>{data.email}</td>
              <td>{data.registrationDate}</td>
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
  )
}

export default SupportManagement