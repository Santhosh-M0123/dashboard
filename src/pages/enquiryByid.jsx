import React from "react";
import { NavLink } from "react-router-dom";

const EnquiryByid = () => {
  return (
    <div>
      {/* User Details Part*/}
      <div style={{ marginTop: "50px" }}>
        <div
          className="top_user_details"
          style={{
            marginTop: "50px",
            marginBottom: "30px",
            paddingLeft: "30px",
          }}
        >
          <NavLink to="/enquires" style={{ textDecoration: "none" }}>
            <h3 style={{ fontSize: "35px", fontWeight: "Bold", color: "gray" }}>
              <i class="fa-solid fa-arrow-left"></i>Property Details
            </h3>
          </NavLink>
        </div>
        <div className="container">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Field</th>
                <th>Data</th>
              </tr>
              <tr>
                <td>Name</td>
                <td>John</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>1234567890</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>example@example.com</td>
              </tr>
              <tr>
                <td>Query Message</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  {/* Ut enim ad minim veniam, quis nostrud exercitation ullamco */}
                  {/* laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. */}
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td>Noted</td>
              </tr>
            </tbody>
          </table>

          <div className="button-container d-flex justify-content-center mt-20">
            {/* <button className="btn btn-primary mx-2">Suspend Property</button>
            <button className="btn btn-primary mx-2">Delete Enquiry</button>
            <button className="btn btn-primary mx-2">Send Notification</button> */}
            {/* <button className="btn btn-primary mx-2">
                  Last 5 viewed properties
                </button> */}
            {/* <button className="btn btn-primary mx-2">
              Total reviews updated
            </button>
            <button className="btn btn-primary mx-2">Property History</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryByid;
