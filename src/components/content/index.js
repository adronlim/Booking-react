import React, { Component } from "react";
import {
  FaBars,
  FaRegCalendarCheck,
  FaReceipt,
  FaStar,
  FaTelegramPlane,
  FaCheckCircle,
  FaClock
} from "react-icons/fa";
import NavButton from "././components/nav-city";
import ContentButton from "././components/content";
import "./index.scss";

class Content extends Component {
  // constructor(){
  //   super.constructor();
  // }
  state = {
    selectedStatus: "",
    class_icon_content: ""
  };
  classValue = "";
  selectStatus = param => this.setState({ selectedStatus: `${param}` });
  render = () => {
    let status_items = [];
    let info_items = [];
    let status = [
      {
        statusContent: `Booking request received`,
        icon: <FaCheckCircle className="status-icon" />
      },
      {
        statusContent: `Awaiting confirmation from Hotel`,
        icon: <FaClock className="clock-icon" />
      }
    ];

    let statusInfo = [
      {
        icon: <FaRegCalendarCheck className="calendar-icon" />,
        infoValue: `Check-in: `,
        infoKey: "July 9th, 2018"
      },
      {
        icon: <FaReceipt className="receipt-icon" />,
        infoValue: `Reference `,
        infoKey: "#UC311K"
      }
    ];
    for (const [index, value] of status.entries()) {
      status_items.push(
        <div className={"content-status-" + (index + 1)} key={index}>
          {value.icon}
          <span>{`${value.statusContent}`}</span>
        </div>
      );
    }
    for (const [index, value] of statusInfo.entries()) {
      info_items.push(
        <div className="content-info" key={index}>
          <div className="row">
            <div className="col-md-icon">{value.icon}</div>
            <div className="col-md-status-info">
              <span>{value.infoValue}</span>
              <p>{value.infoKey}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="col-md-7 content">
        <div className="nav">
          <div className="row">
            <div className="col-md-7">
              <div className="city">Choose a city</div>
            </div>
            <div className="col-md-5">
              <NavButton
                className="bar-nav nav-city-button"
                onClick={() => {
                  "";
                }}
                icon={<FaBars className="content-bar-icon" />}
              />
            </div>
          </div>
        </div>
        <h2>Booking</h2>
        <p className="p-padding-top">Your current upcoming stays</p>
        <p className="text-grey">
          Please update with the properity if your travel plans should change or
          if you wish to make any changes to your stay.
        </p>
        <a id="link" href="#link">
          <b>></b> Learn more about our premium subscription
        </a>
        <div className="container container-content-status">
          <div className="row">
            <div className="col col-md-5">
              <img
                width="100%"
                height="100%"
                alt="room"
                src="data:image/jpg;base64,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"
              />
            </div>
            <div className="col col-md-7">
              <div className="container-status-info">
                <div className="content-content-status">
                  <h5>The Green View</h5>
                  {/* <div className="content-status-1">
                    <FaCheckCircle className="status-icon" />
                    <span>Booking request received</span>
                  </div>
                  <div className="content-status-2">
                    <FaClock className="clock-icon" />
                    <span>Awaiting confirmation from Hotel</span>
                  </div> */}
                  {status_items}
                </div>
                <div className="content-content-info">
                  <h5>Superior Premium</h5>
                  {/* <div className="content-info" >
                    <div className="row">
                      <div className="col-md-1">
                        <FaRegCalendarCheck className="calendar-icon" />
                      </div>
                      <div className="col-md-6">
                        <span>Check-in:</span>
                        <p>July 9th, 2018</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-1">
                        <FaReceipt className="receipt-icon" />
                      </div>
                      <div className="col-md-6">
                        <span>Reference</span>
                        <p>#UC311K</p>
                      </div>
                    </div>
                  </div> */}
                  {info_items}
                </div>
              </div>
              <div className="content-buttons-list">
                <ContentButton
                  className="content-button-green"
                  icon={<FaStar className="content-button-icon" />}
                  text={"Rate your stay"}
                  selectedStatus={this.state.selectedStatus === "Rate"}
                  onClick={() => this.selectStatus("Rate")}
                />
                <ContentButton
                  className="content-button-grey"
                  icon={<FaTelegramPlane className="content-button-icon" />}
                  text={"Email the property"}
                  selectedStatus={this.state.selectedStatus === "Email"}
                  onClick={() => this.selectStatus("Email")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Content;
