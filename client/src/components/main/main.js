import React, { Component } from "react";
import Reboot from "../reboot/reboot";
import Log from '../log/log';
import Update from "../update/update";
import FileUpload from "../fileupload/fileupload";
import SetLog from "../setlog/setlog";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="container cust-home">
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header custom-header" id="headingOne">
                <h5 className="mb-0">
                  <a
                    href="false"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{'color': 'white'}}
                  >
                    <span className="fa fa-tasks" />
                    <label>
                      <b>&nbsp;&nbsp;Aviliable Firmwares: </b>
                    </label>
                    <i className="fa fa-angle-down pull-right" />
                  </a>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <FileUpload />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header custom-header" id="headingTwo">
                <h5 className="mb-0">
                  <a
                    href="false"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{'color': 'white'}}
                  >
                    <span className="fa fa-spinner" />
                    <label>
                      <b>&nbsp;&nbsp;Firmware upload: </b>
                    </label>
                    <i className="fa fa-angle-down pull-right" />
                  </a>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Update />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header custom-header" id="headingThree">
                <h5 className="mb-0">
                  <a
                    href="false"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{'color': 'white'}}
                  >
                    <span className="fa fa-desktop" />
                    <label>
                      <b>&nbsp;&nbsp;Reboot status and logs: </b>
                    </label>
                    <i className="fa fa-angle-down pull-right" />
                  </a>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="row">
                  {
                    
                    <div className="col-6">
                      
                        <Log />
                        <Reboot />

                      
                    </div>
                    
                  }
                    <div className="col-6">

                      <SetLog />

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
