import React, { Component } from "react";
import axios from "axios";
import "./log.css";
const { REACT_APP_VM_SERVER, REACT_APP_UPDATE_REBOOT } = process.env;

export default class UploadTwin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceID: "",
      message: "",
      logging:false
    };
  }
  logMessage = e => {
    e.preventDefault();
    const { deviceID, message } = this.state;
      this.setState({ logging: true });
      axios({
        method: "post",
        url: REACT_APP_VM_SERVER + 'updatereboot',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers":"Authorization, Content-Type",
          "Access-Control-Allow-Methods": "POST"
        },
        data: {
          "reboot": "true"
        }
      })
        .then(response => {
          console.log(response);
          alert('Reboot successfully')
          this.setState({ logging: false, deviceID:'', message:'' });
        })
        .catch(err => {
          console.log(err);
          alert('Error in Reboot.')
          this.setState({ logging: false });
        });
  };
  handleInput = e => {
    const { name, value } = e.target;
    if (name === "deviceID") {
      this.setState({ deviceID: value });
    }else if (name === "message") {
      this.setState({ message: value });
    }
  };
  render() {
    const { deviceID, message, logging } = this.state;
    return (
      <div className="box-it">
        <form onSubmit={this.logMessage}>
          {
            /*
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="deviceID"
              value={deviceID}
              name="deviceID"
              placeholder="Enter device ID.."
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={message}
              name="message"
              className="form-control"
              id="message"
              placeholder="Enter message.."
              onChange={this.handleInput}
            />
          </div>
          */
          }
          <button type="submit" className="cust-btn">
            {logging?'Rebooting..':'Reboot'}
          </button>
        </form>
      </div>
    );
  }
}
