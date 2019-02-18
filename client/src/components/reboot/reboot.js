import React, { Component } from "react";
import axios from "axios";
const { REACT_APP_VM_SERVER, REACT_APP_REBOOT } = process.env;

export default class Reboot extends Component {
  state = {
    rebootStatus: [],
    rebootStatusLoading: false
  };
  componentWillMount() {
    this.getStatus();
  }

  getStatus = () => {
    this.setState({ rebootStatusLoading: true });
    axios({
      method: "get",
      url: REACT_APP_VM_SERVER + REACT_APP_REBOOT
    })
      .then(response => {
        console.log(response);
        this.setState({ rebootStatus: [{ ...response.data }] });
        this.setState({ rebootStatusLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ rebootStatusLoading: false });
      });
  };
  showStatus = (status, key) => {
    return (
      <div index={key}>
        <p><b>Reboot status:</b>&nbsp;<span>{status.status?status.status:'--'}</span></p><br/>
        <p><b>Reeboot type:</b>&nbsp;<span>{status.rebootType}</span></p>
      </div>
    )
  }
  render() {
    const { rebootStatus, rebootStatusLoading } = this.state;
    return (
      <div className="box-it">
        {rebootStatus.length ? (
          rebootStatus.map((status, index) => this.showStatus(status, index))
        ) : (
          <div>
            <p><b>Reboot status:</b>&nbsp;<span>{'--'}</span></p><br/>
            <p><b>Reeboot type:</b>&nbsp;<span>{'--'}</span></p>
          </div>
        )}
        <button type="button" className="fluid-btn" onClick={this.getStatus}>
          {rebootStatusLoading ? "Refreshing.." : "Refresh"}
        </button>
      </div>
    );
  }
}
