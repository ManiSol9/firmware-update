import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import $ from "jquery";
const {
  REACT_APP_VM_SERVER,
  REACT_APP_RUN_COMMAND,
  REACT_APP_GET_ID,
  REACT_APP_GET_COMMAND,
  REACT_APP_AZURE_SERVER
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
    ],
    getIdLoading: false,
    getCommandLoading: false
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
          this.setState({ runnigCommand: false, response: `Command output: ${JSON.stringify(response.data, null, 4)}` });
        })
        .catch(err => {
          alert("Error executing command");
          console.log(err);
          this.setState({ runnigCommand: false, response: err });
        });
    }
  };

  getId = (e) => {
    e.preventDefault();
    this.setState({ getIdLoading: true });
    axios({
      method: "get",
      url: REACT_APP_VM_SERVER + REACT_APP_GET_ID
    })
      .then(response => {
        console.log(response);
        this.getCommand(response.data.Id);
        this.setState({ getIdLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ getIdLoading: false });
      });
  };
  getCommand = id => {
    this.setState({ getCommandLoading: true });
    axios({
      method: "get",
      url: REACT_APP_AZURE_SERVER + REACT_APP_GET_COMMAND + id
    })
      .then(response => {
        console.log(response);
        this.setState({ getCommandLoading: false, response: `Execution status: ${JSON.stringify(response.data, null, 4)}` });
      })
      .catch(err => {
        console.log(err);
        this.setState({ getCommandLoading: false });
      });
  };
  copyToClipboard = element => {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  };
  render() {
    const {
      command,
      runnigCommand,
      response,
      availableCmd,
      getIdLoading,
      getCommandLoading
    } = this.state;
    return (
      <div className="row cmd-container">
        <form className="col-8">
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
          <button className="cust-btn margin-btn" onClick={this.execCmd} >
            {runnigCommand ? "Command running.." : "Run command"}
          </button>
          <button className="cust-btn margin-btn" onClick={this.getId}>
            {getIdLoading || getCommandLoading
              ? "Checking.."
              : "Check execution"}
          </button>
          <br />
          <label htmlFor="response">
            <b>Output: </b>
          </label>
          <textarea
            className="form-control cust-text-area"
            id="response"
            rows="4"
            placeholder="Command output or Execution status"
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
