import React, { Component } from "react";
import axios from "axios";
import "./style.css";

const {
  REACT_APP_VM_SERVER,
  REACT_APP_RUN_COMMAND,
  REACT_APP_RUN_DIAG,
  REACT_APP_GET_COMMAND
} = process.env;

export default class RunCommand extends Component {
  state = {
    command: "",
    response:'',
    runnigCommand: false
  };
  execCmd = (e) => {
    e.preventDefault();
    const { command } = this.state;
    if (command === "") {
      alert("Please enter command");
    } else {
      this.setState({ runnigCommand: true });
    axios({
      method: "post",
      url: REACT_APP_VM_SERVER + REACT_APP_RUN_COMMAND,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Access-Control-Allow-Methods": "POST"
      },
      data: {
        method_name: "runcommand",
        cmd: command
      }
    })
      .then(response => {
        console.log(response);
        this.setState({ runnigCommand: false, response:response.data });
      })
      .catch(err => {
        alert('Error executing command')
        console.log(err);
        this.setState({ runnigCommand: false, response:err });
      });
    }
  };
  render() {
    const { command, runnigCommand, response } = this.state;
    return (
      <div className="cmd-container">
        <form onSubmit={this.execCmd}>
          <label htmlFor="commandToRun"><b>Command: </b></label>
          <textarea
            className="form-control cust-text-area"
            id="commandToRun"
            rows="5"
            placeholder="Type a command to execute"
            value={command}
            onChange={e=>this.setState({command:e.target.value})}
          />
          <button className="cust-btn margin-btn" type="submit">
            {runnigCommand?'Command executing..':'Run command'}
          </button>
        </form>
        <label htmlFor="response"><b>Output: </b></label>
        <textarea
            className="form-control cust-text-area"
            id="response"
            rows="5"
            placeholder="Command output"
            readOnly
            value={response}
          />
      </div>
    );
  }
}
