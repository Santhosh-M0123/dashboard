import React from 'react';
import '../styles/Agentmanagement.css';
import {useNavigate} from 'react-router-dom'

const PropertyManagement = () => {
  const tableData = [
    {
      id: 1,
      propertyId : 609,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : '$800',
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Active',
    },
    {
      id: 2,
      propertyId : 619,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : '$800',
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Sold out',
    },
    {
      id: 3,
      propertyId : 689,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : '$800',
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Active',
    },
    {
      id: 4,
      propertyId : 709,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : '$800',
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Active',
    },
    {
      id: 5,
      propertyId : 659,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : '$800',
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Active',
    },
    {
      id: 6,
      propertyId : 689,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : '$800',
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Sold out',
    },
    {
      id: 7,
      propertyId : 809,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : "$800",
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Active',
    },
    {
      id: 8,
      propertyId : 909,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : '$800',
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Sold out',
    },
    {
      id: 9,
      propertyId : 1009,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : "$800",
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Active',
    },
    {
      id: 10,
      propertyId : 895,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : "$800",
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Active',
    },
    {
      id: 11,
      propertyId : 856,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : "$800",
      state : 'Tamilnadu',
      city : 'Chennai',
      status: 'Active',
    },
    {
      id: 12,
      propertyId : 711,
      propertyType: 'Residential',
      propertyAddress: "Sector A avinashi road",
      propertyAddress2 : "B-colony",
      TotalViews: 50,
      propertyPrice : '$800',
      state : 'Tamilnadu',
      city : 'Chennai',
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
  let PropertyDetails = () => {
    navigate("/property/123");
  }

  return (
    <div className="agent">

      <div className="container mt-4">
      <table className="table table-striped table-hover">
        <thead className="thead-light">
          <tr>
            <th>S.No</th>
            <th>Property Id</th>
            <th>Property Type</th>
            <th>Property address - I</th>
            <th>Property address - II</th>
            <th>Property view</th>
            <th>Property price</th>
            <th>State</th>
            <th>Cities</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.slice(startIndex, endIndex).map((data) => (
            <tr key={data.id} onClick={PropertyDetails}>
              <td>{data.id}</td>
              <td>{data.propertyId}</td>
              <td>{data.propertyType}</td>
              <td>{data.propertyAddress}</td>
              <td>{data.propertyAddress2}</td>
              <td>{data.TotalViews}</td>
              <td>{data.propertyPrice}</td>
              <td>{data.state}</td>
              <td>{data.city}</td>
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
  );
}

export default PropertyManagement;