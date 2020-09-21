import React, { Component } from "react";
import "./Profile.css";
import Header from "../../common/header/Header";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header profileOptions="true" />
        <div className="profile-container">
          <div className="profile-info">
            <div className="profile-header">
              <div className="profile-header-details">
                <div className="profile-icon">
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle style={{ fontSize: 150 }} />
                  </IconButton>
                </div>
                <div className="profile-details">
                  <div className="account-username">
                    <Typography variant="h6">Username</Typography>
                  </div>
                  <div className="account-details">
                    <Typography variant="subtitle1">Posts: 6</Typography>
                    <Typography variant="subtitle1">Follows: 4</Typography>
                    <Typography variant="subtitle1">Followed By: 6</Typography>
                  </div>
                  <div className="account-footer">
                    <div className="footer-title">
                      <Typography variant="h5">UpGrad Education</Typography>
                    </div>
                    <Fab
                      color="secondary"
                      aria-label="edit"
                      onClick={this.openEditModalHandler}
                    >
                      <EditIcon />
                    </Fab>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-body">body</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
