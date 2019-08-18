import React, { Component } from "react";
import {
  FaInbox,
  FaBed,
  FaUserCog,
  FaLifeRing,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import MenuButton from "./components/menu";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

class Sidemenu extends Component {
  state = {
    selectedMenu: ""
  };

  selectMenu = param => this.setState({ selectedMenu: `${param}` });
  render = () => {
    let { username, shortUserName, role } = this.props;
    return (
      <div className="col-md-4 sidemenu">
        <h4>Nomad Rental</h4>
        <div className="sidemenu-shortname">
          <span>{shortUserName}</span>
        </div>
        <div className="sidemenu-profile">
          <p>{username}</p>
          <p className="sidemenu-profile-role">{role}</p>
        </div>
        <div className="sidemenu-menu">
          <MenuButton
            icon={<FaInbox className="sidemenu-menu-button-icon" />}
            text={"Bookings"}
            selectedMenu={this.state.selectedMenu === "Bookings"}
            onClick={() => this.selectMenu("Bookings")}
          />

          <MenuButton
            icon={<FaBed className="sidemenu-menu-button-icon" />}
            text={"Refer and Earn"}
            selectedMenu={this.state.selectedMenu === "Refer and Earn"}
            onClick={() => this.selectMenu("Refer and Earn")}
          />

          <MenuButton
            className={"mt-0"}
            icon={<FaUserCog className="sidemenu-menu-button-icon" />}
            text={"Account Settings"}
            selectedMenu={this.state.selectedMenu === "Account Settings"}
            onClick={() => this.selectMenu("Account Settings")}
          />

          <p className="sidemenu-menu-title">Support</p>

          <MenuButton
            className={"mt-15"}
            icon={<FaLifeRing className="sidemenu-menu-button-icon" />}
            text={"Contact Us"}
            selectedMenu={this.state.selectedMenu === "Contact Us"}
            onClick={() => this.selectMenu("Contact Us")}
          />
          <MenuButton
            className={"mt-0"}
            icon={
              <FaExternalLinkSquareAlt className="sidemenu-menu-button-icon" />
            }
            text={"FAQ"}
            selectedMenu={this.state.selectedMenu === "FAQ"}
            onClick={() => this.selectMenu("FAQ")}
          />
        </div>
      </div>
    );
  };
}

export default Sidemenu;
