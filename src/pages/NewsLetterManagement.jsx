import React from 'react'

const NewsLetterManagement = () => {
    const tableData = [
        {
          id: 1,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 2,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 3,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 4,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 5,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 6,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 7,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 8,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 9,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 10,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 11,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        },
        {
          id: 12,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          date : "22-03-2023 / 11.00",
          email_sent : 18,
          status : 'Active'
        }]

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
        <div className="title_enquiry" style={{marginTop:'30px',marginBottom:'30px',marginLeft:'20px'}}>
        <h3 style={{fontWeight:'bold',color:'black'}}>Newsletter User Listed</h3>
    </div>
        <div className="agent">
    
          <div className="container mt-0">
          <table className="table table-striped table-hover">
            <thead className="thead-light">
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>User Email</th>
                <th>Mobile Number</th>
                <th>Registred date</th>
                <th>Total Email sent</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(startIndex, endIndex).map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.ownerName}</td>
                  <td>{data.email}</td>
                  <td>{data.mobileNumber}</td>
                  <td>{data.date}</td>
                  <td>{data.email_sent}</td>
                  <td>{data.status}</td>
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
    </div>
  )
}

export default NewsLetterManagement