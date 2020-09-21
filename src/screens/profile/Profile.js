import React, { Component } from "react";
import "./Profile.css";
import Header from "../../common/header/Header";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import Modal from "react-modal";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const TabContainer = function(props) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const customModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      fullname: "",
      fullnameRequired: "dispNone",
      initialTitle: "UpGrad Education",
    };
  }

  openModalHandler = () => {
    this.setState({
      modalIsOpen: true,
      fullname: "",
      fullnameRequired: "dispNone",
    });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };

  inputFullnameChangeHandler = (e) => {
    this.setState({ fullname: e.target.value });
  };

  updateClickHandler = () => {
    this.state.fullname === ""
      ? this.setState({ fullnameRequired: "dispBlock" })
      : this.setState({ fullnameRequired: "dispNone" });

    if (this.state.fullname === "") {
      return;
    } else {
      this.setState({ initialTitle: this.state.fullname });
    }
  };

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
                      <Typography variant="h5">
                        {this.state.initialTitle}
                      </Typography>
                    </div>
                    <Fab
                      color="secondary"
                      aria-label="edit"
                      onClick={this.openModalHandler}
                    >
                      <EditIcon />
                    </Fab>
                    <Modal
                      ariaHideApp={false}
                      isOpen={this.state.modalIsOpen}
                      onRequestClose={this.closeModalHandler}
                      style={customModalStyle}
                    >
                      <Typography variant="h6" id="modal-title">
                        Edit
                      </Typography>
                      <br />
                      <TabContainer>
                        <FormControl required>
                          <InputLabel htmlFor="fullname">Full Name</InputLabel>
                          <Input
                            id="fullname"
                            type="text"
                            fullname={this.state.fullname}
                            onChange={this.inputFullnameChangeHandler}
                          />
                          <FormHelperText
                            className={this.state.fullnameRequired}
                          >
                            <span className="red">required</span>
                          </FormHelperText>
                        </FormControl>
                        <br />
                        <br />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.updateClickHandler}
                        >
                          UPDATE
                        </Button>
                      </TabContainer>
                    </Modal>
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
