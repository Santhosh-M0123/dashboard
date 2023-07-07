import React from 'react';
import {useNavigate} from "react-router-dom";
const ContactUsEnquires = () => {
    const tableData = [
        {
          id: 1,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 2,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 3,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 4,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 5,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 6,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 7,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 8,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 9,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 10,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 11,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
        },
        {
          id: 12,
          ownerName: 'John Doe',
          email : 'johnDoe@gmail.com',
          mobileNumber: '1234567890',
          query_sub : "Hey regards property views",
          date : "22-03-2023 / 11.00"
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
      const NavigateToid = () => {
        navigate('/enquires/:id');
      }
  return (
    <div>
        <div className="title_enquiry" style={{marginTop:'30px',marginBottom:'30px',marginLeft:'20px'}}>
        <h3 style={{fontWeight:'bold',color:'black'}}>Enqueries Listed</h3>
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
                <th>Query Subject</th>
                <th>Data / Time</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(startIndex, endIndex).map((data) => (
                <tr key={data.id} onClick={NavigateToid}>
                  <td>{data.id}</td>
                  <td>{data.ownerName}</td>
                  <td>{data.email}</td>
                  <td>{data.mobileNumber}</td>
                  <td>{data.query_sub}</td>
                  <td>{data.date}</td>
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

export default ContactUsEnquires