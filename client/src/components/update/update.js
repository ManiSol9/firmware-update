import React, { Component } from "react";
import axios from "axios";
import UploadTwin from "../uploadTwin/uploadTwin";
import "./update.css";
import StyledProgressbar from "../common/styledProgressBar";
const { REACT_APP_VM_SERVER, REACT_APP_GETSTATUS } = process.env;
export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firmwareStatuses: [],
      getFirmwareLoading: false
    };
  }

  componentWillMount() {
    this.getStatus();
  }

  getStatus = () => {
    this.setState({ getFirmwareLoading: true });
    axios({
      method: "get",
      url: REACT_APP_VM_SERVER + REACT_APP_GETSTATUS
    })
      .then(response => {
        console.log(response);
        this.setState({ firmwareStatuses: [{ ...response.data }] });
        this.setState({ getFirmwareLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ getFirmwareLoading: false });
      });
  };

  showStatus = (status, index) => {
    let percentage = 0;
    switch (status.otaStatus) {
      case "WaitingForUpdate":
        percentage = 5;
        break;
      case "SoftwareUpdateinProgress":
        percentage = 15;
        break;
      case "DownloadComplete":
        percentage = 25;
        break;
      case "UnzipComplete":
        percentage = 40;
        break;
      case "ReadPackageDataComplete":
        percentage = 55;
        break;
      case "PreInstallComplete":
        percentage = 70;
        break;
      case "InstallComplete":
        percentage = 85;
        break;
      case "SoftwareUpdateComplete":
        percentage = 100;
        break;
      default:
        percentage = 0;
    }
    return (
      <div className="status-container" key={index}>
        <div className="status-details-container">
          <b>OTA Status: </b>
          <span>{status.otaStatus}</span>
          <br />
          <b>Current version: </b>
          <span>{status.currentVersion}</span>
          <br />
          <b>Pending Status: </b>
          <span>{status.pendingVersion}</span>
          <br />
        </div>
        <div style={{ width: "76px" }}>
          <StyledProgressbar percentage={percentage} text={`${percentage}%`} />
        </div>
      </div>
    );
  };
  render() {
    const { firmwareStatuses, getFirmwareLoading } = this.state;
    return (
      <div>
        <div className="row update-row">
          <div className="col-6">
            <UploadTwin />
          </div>
          <div className="col-6">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header toggle-card" id="headingOne">
                  <div
                    className="row"
                    style={{ cursor: "pointer" }}
                    data-toggle="collapse"
                    data-target="#toggleFirmware"
                    role="button"
                    aria-expanded="false"
                    aria-controls="toggleFirmware"
                  >
                    <img
                      className="img-upload"
                      src={require("./play.svg")}
                      alt="..."
                      data-toggle="modal"
                      data-target="#showFirmwareDetails"
                    />
                    <p className="col-10 upload-text">Status</p>
                  </div>
                </div>
                <div>
                  <div className="collapse multi-collapse" id="toggleFirmware">
                    <div className="card firm-card">
                      <div className="card-body">
                        {firmwareStatuses.length?firmwareStatuses.map((status, index) =>
                          this.showStatus(status, index)
                        ):<p style={{'textAlign': 'center'}}>No records found</p>}
                      </div>
                      <div className="toogle-footer">
                        <button type="button" className="cust-btn">
                          View Logs
                        </button>
                        <button type="button" className="cust-btn" onClick={this.getStatus}>
                          {getFirmwareLoading?'Refreshing..':'Refresh'}
                        </button>
                        {/* <img
                          className="close-firm"
                          src={require("./close.svg")}
                          title="close"
                          alt="..."
                        />
                        <img
                          className="upload-firm"
                          src={require("./upload.svg")}
                          title="upload"
                          alt="..."
                        />
                        <img
                          className="send-firm"
                          src={require("./send.svg")}
                          title="send"
                          alt="..."
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
