import React, { Component } from "react";
import axios from "axios";
import UploadTwin from "../uploadTwin/uploadTwin";
import "./setlog.css";
import StyledProgressbar from "../common/styledProgressBar";
const { REACT_APP_VM_SERVER, REACT_APP_GETSTATUS } = process.env;
export default class SetLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settime: null,
            buttonstatus: false
        };
    }

    componentWillMount() {
    }

    updateSet = e => {

        e.preventDefault();

        this.setState({
            buttonstatus: true
        })

        if (this.state.settime == null) {
            this.setState({
                buttonstatus: false, settime: null
            })
            alert("Please enter all the fields");
        } else {
            this.setState({ updateTwinLoading: true });
            axios({
                method: "post",
                url: "https://wrdm2-dockerbottleapi-chetan.azurewebsites.net/updatelogtime",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Headers": "Authorization, Content-Type",
                    "Access-Control-Allow-Methods": "POST"
                },
                data: {
                    time: this.state.settime
                }
            })
                .then(response => {
                    console.log(response);
                    this.setState({
                        buttonstatus: false, settime: null
                    })
                    alert("Updated Successfully")
                    //document.getElementById("software").value=null
                })
                .catch(err => {
                    console.log(err);
                    alert('Error in time update')
                    this.setState({
                        buttonstatus: false, settime: null
                    })
                });
        }
    }

    handleInput = e => {
        const { name, value } = e.target;
        if (name === "settime") {
            this.setState({ settime: value });
        }
    };

    render() {
        return (
            <div>
                <div className="row update-row">
                    <div className="col-12">
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
                                        <p className="col-8 upload-text">Set Log Time</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="collapse multi-collapse" id="toggleFirmware">
                                        <div className="card firm-card">
                                            <div className="card-body">
                                                <form onSubmit={this.updateSet}>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Loging Time Intervel (in Min)</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="software"
                                                            value={this.state.settime}
                                                            name="settime"
                                                            aria-describedby="softwareHelp"
                                                            placeholder="Duration in min"
                                                            onBlur={this.handleInput}
                                                        />
                                                    </div>
                                                    <button type="button" className="cust-btn" onClick={this.updateSet}>
                                                        {this.state.buttonstatus ? "Setting.." : "Set"}
                                                    </button>
                                                </form>
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
