import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import axios from "axios";
import schedule from "../../components/assets/schedule.png"

import DateTimePicker from 'react-datetime-picker';
import moment from "moment"
import {useHistory } from "react-router-dom";

const LastMail = () => {
  const userdbuid = localStorage.getItem("dbuseruid");

  const [emails, setEmails] = useState([]);
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/getEmailList/${userdbuid}`
      )
      .then((res) => setEmails(res.data));
  }, [emails, userdbuid]);

  useEffect(() => {
    axios
      .get(
        `https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/getUserDetails/${userdbuid}`
      )
      .then((res) => {
        console.log(res.data);
        setuser(res.data[0]);
      });
  }, [userdbuid]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showall, setShowall] = useState(false);

  const handleCloseall = () => setShowall(false);
  const handleShowall = () => setShowall(true);
  const [value, onChange] = useState(null);

  const [To, setTo] = useState("");
  // const [from, setFrom] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const history=useHistory()
  const sendEmail = () => {
    // console.log(To, from, Subject, Message);
    if (Subject.length && Message.length) {

      axios
        .post(
          "https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/send_mail",
          { userId: userdbuid, To, from: user.orgName, Message, Subject },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          // console.log(res.data);
          alert("Email Sent");
        });
      // setFrom("");
      setMessage("");
      setSubject("");
    } else {
      alert("please put a valid email and message")
    }
  };

  const handlesendall = () => {
    if (value) {
      console.log(moment(value).format('YYYY-MM-DD h:mm:ss'))
      axios.post(`https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/createMassMail`, {
        "userId": userdbuid,
        "schedule": moment(value).format('YYYY-MM-DD h:mm:ss')
      }).then(res => {
        console.log(res); if (res.status === 200) {
          alert("Email sent to all")
        }
      }).catch(err => { console.log(err) })
    } else {
      alert("Please Select a Proper Date and Time to Schedule")
    }

  }

  return (
    <>

      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-sm btn-warning text-light rounded" onClick={()=>history.goBack()}>
          Back
        </button>
        <label for="exampleFormControlInput1" className="form-label mx-2">
          Send Emails
        </label>
        <img onClick={() => { handleShowall() }} src={schedule} width="6%" role="button" className="mb-2" alt="schedule" />
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Emails</th>
            <th>Send Mail</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="">{data.emailId}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning text-secondary"
                  onClick={() => {
                    handleShow();
                    setTo(data.emailId);
                  }}
                >
                  Send Mail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


      <Modal show={showall} onHide={handleCloseall}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="justify-content-center align-items-center d-flex">
            <DateTimePicker
              onChange={onChange}
              value={value}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="justify-content-center align-items-center d-flex">
            <Button
              variant="warning"
              className="text-light"
              onClick={handleCloseall}
            >
              Cancel
            </Button>
          </div>
          <Button
            variant="warning"
            className="text-light"
            onClick={() => {
              handlesendall();
              handleCloseall();
            }}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                value={Subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                rows="3"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            className="text-light"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="warning"
            className="text-light"
            onClick={() => {
              sendEmail();
              handleClose();
            }}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LastMail;
