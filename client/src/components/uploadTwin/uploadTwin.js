import React, { Component } from "react";
import axios from "axios";
import "./uploadTwin.css";
const { REACT_APP_VM_SERVER, REACT_APP_UPDATE_TWIN } = process.env;

export default class UploadTwin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      softwareVersion: "1.0.0.006",
      updateTwinLoading: false,
      reboot:"True",
      url:
        "https://wrdm2chetanpackage.blob.core.windows.net/wrdm2-package-file-chetan/package.tar.gz"
    };
  }
  updateTwin = e => {
    e.preventDefault();
    const { softwareVersion, url, reboot } = this.state;
    if (softwareVersion === "" || url === "") {
      alert("Please enter all the fields");
    } else {
      this.setState({ updateTwinLoading: true });
      axios({
        method: "post",
        url: REACT_APP_VM_SERVER + REACT_APP_UPDATE_TWIN ,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers":"Authorization, Content-Type",
          "Access-Control-Allow-Methods": "POST"
        },
        data: {
          software_version: softwareVersion,
          url: url,
          reboot: reboot
        }
      })
        .then(response => {
          console.log(response);
          alert('Firmware updated successfully')
          this.setState({ updateTwinLoading: false });
        })
        .catch(err => {
          console.log(err);
          alert('Error in Firmware update')
          this.setState({ updateTwinLoading: false });
        });
    }
  };
  handleInput = e => {
    const { name, value } = e.target;
    if (name === "url") {
      this.setState({ url: value });
    }
    if (name === "reboot") {
      this.setState({ reboot: value });
    }
    if (name === "softwareVersion") {
      this.setState({ softwareVersion: value });
    }
  };
  render() {
    const { url, softwareVersion, updateTwinLoading, reboot } = this.state;
    return (
      <div>
        <form onSubmit={this.updateTwin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Software version</label>
            <input
              type="software-version"
              className="form-control"
              id="software"
              value={softwareVersion}
              name="softwareVersion"
              aria-describedby="softwareHelp"
              placeholder="Enter software version"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Blob URL</label>
            <input
              type="text"
              value={url}
              name="url"
              className="form-control"
              id="blobUrl"
              placeholder="Enter Blob URL"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rebootType">Reboot</label>
            <select className="form-control" id="rebootType" value={reboot}
              name="reboot" onChange={this.handleInput}>
              <option>True</option>
              <option>False</option>
            </select>
          </div>
          <button type="submit" className="cust-btn">
            {updateTwinLoading?'Updating Firmware..':'Update firmware'}
          </button>
        </form>
      </div>
    );
  }
}
