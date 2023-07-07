import React, { useState } from "react";
import "../styles/Agentmanagement.css";
import { NavLink } from "react-router-dom";

const UserDetails = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the subject and message data
    console.log("Subject:", subject);
    console.log("Message:", message);
    // Reset the form
    setSubject("");
    setMessage("");
  };
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
          <NavLink to="/agent" style={{ textDecoration: "none" }}>
            <h3 style={{ fontSize: "35px", fontWeight: "Bold", color: "gray" }}>
              <i class="fa-solid fa-arrow-left"></i>Agent Details
            </h3>
          </NavLink>
          <NavLink to="/agent/:id/activity" style={{ textDecoration: "none" }}>
            <span>
              Agent activity <i class="fa-solid fa-arrow-right"></i>
            </span>
          </NavLink>
          {/* <i class="fa-solid fa-arrow-left"></i> */}
          {/* <i class="fa-solid fa-arrow-right"></i> */}
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
                <td>Account</td>
                <td>Account Name</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>

          <div className="button-container d-flex justify-content-center mt-20">
            <button className="btn btn-primary mx-2">Suspend Agent</button>
            <button className="btn btn-primary mx-2">Delete Agent</button>
            <button className="btn btn-primary mx-2">Send Message</button>
            <button className="btn btn-primary mx-2">
              Last 5 viewed properties
            </button>
            <button className="btn btn-primary mx-2">
              Total Enquiries Asked
            </button>
            <button className="btn btn-primary mx-2">Activity History</button>
          </div>
        </div>
      </div>

      {/* Messanger part */}
      <div
        className="top_user_details"
        style={{ marginTop: "50px", marginBottom: "30px", paddingLeft: "30px" }}
      >
        <h3 style={{ fontSize: "35px", fontWeight: "Bold", color: "gray" }}>
          Send Message
        </h3>
      </div>
      <div
        className="container d-flex justify-content-center vh-100"
        style={{ maxHeight: "400px", marginTop: "50px" }}
      >
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                placeholder="Enter the subject of your message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter the message needed to send for the agent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "30px" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default UserDetails;
