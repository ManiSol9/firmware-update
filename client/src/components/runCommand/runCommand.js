import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import $ from "jquery";
const {
  REACT_APP_VM_SERVER,
  REACT_APP_RUN_COMMAND,
  REACT_APP_RUN_DIAG,
  REACT_APP_GET_COMMAND
} = process.env;

export default class RunCommand extends Component {
  state = {
    command: "",
    response: "",
    runnigCommand: false,
    availableCmd: [
      "ifconfig",
      "dmesg",
      "df",
      "ps",
      "ls",
      "tcpdump",
      "date",
      "lshw",
      "lscpu",
      "fdisk",
      "netstat"
    ]
  };
  execCmd = e => {
    e.preventDefault();
    const { command, availableCmd } = this.state;
    if (command === "") {
      alert("Please enter command");
    } else if (availableCmd.filter(cmd => cmd == command.trim()).length == 0) {
      alert("Please provide only available commands");
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
          this.setState({ runnigCommand: false, response: response.data });
        })
        .catch(err => {
          alert("Error executing command");
          console.log(err);
          this.setState({ runnigCommand: false, response: err });
        });
    }
  };

  copyToClipboard = element => {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  };
  render() {
    const { command, runnigCommand, response, availableCmd } = this.state;
    return (
      <div className="row cmd-container">
        <form onSubmit={this.execCmd} className="col-8">
          <label htmlFor="commandToRun">
            <b>Command: </b>
          </label>
          <input
            className="form-control cust-text-area"
            id="commandToRun"
            placeholder="Type a command to execute"
            value={command}
            onChange={e => this.setState({ command: e.target.value })}
          />
          <button className="cust-btn margin-btn" type="submit">
            {runnigCommand ? "Command executing.." : "Run command"}
          </button>
          <br />
          <label htmlFor="response">
            <b>Output: </b>
          </label>
          <textarea
            className="form-control cust-text-area"
            id="response"
            rows="4"
            placeholder="Command output"
            readOnly
            value={response}
          />
        </form>
        <div className="avail-cmds col-4">
          <h6>Available commands</h6>
          <ul className="cmd-ul">
            {availableCmd.map((cmd, index) => (
              <li key={index}>
                <span id={index + cmd} style={{ margin: "0px" }}>
                  {cmd}
                </span>
                <img
                  className="copy-icon"
                  alt="copy"
                  src="copy.svg"
                  width="18"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Click to copy"
                  onClick={() => this.copyToClipboard(`#${index + cmd}`)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
