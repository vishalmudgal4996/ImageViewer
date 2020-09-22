import React, { Component } from "react";
import "./Header.css";
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Modal from "react-modal";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const styles = (theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#c0c0c0",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "300px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "300px",
    },
    height: "38px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "none",
    backgroundColor: "#DFDFDF",
    padding: 6,
    marginTop: 0,
    borderRadius: "12px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    maxHeight: "20px",
    "&:focus": {
      backgroundColor: "",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    fontWeight: "bolder",
  },
}))(MenuItem);

const customModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "770px !important",
  },
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      open: false,
      modalIsOpen: false,
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMyAccountClose = () => {
    this.setState({ anchorEl: null });
    this.props.history.push("/profile");
  };

  handleLogoutClose = () => {
    this.setState({ anchorEl: null });
    this.props.history.push("/");
    sessionStorage.removeItem("access-token");
  };

  openModalHandler = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <header className="app-header">
          <div className="flex-container-header">
            <div className="app-logo">
              <span className="app-logo-text">Image Viewer</span>
            </div>
            {this.props.homeOptions === "true" ? (
              <div className="homepage-header">
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <div className="upload">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<CloudUploadIcon />}
                    onClick={this.openModalHandler}
                  >
                    Upload
                  </Button>
                </div>
                <div className="avatar">
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle style={{ fontSize: 48 }} />
                  </IconButton>
                  <StyledMenu
                    id="customized-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                  >
                    <StyledMenuItem onClick={this.handleMyAccountClose}>
                      My Account
                    </StyledMenuItem>
                    <hr style={{ width: "75%" }} />
                    <StyledMenuItem onClick={this.handleLogoutClose}>
                      Logout
                    </StyledMenuItem>
                  </StyledMenu>
                </div>
                <Modal
                  ariaHideApp={false}
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModalHandler}
                  style={customModalStyle}
                >
                  <Typography variant="h4" id="modal-title">
                    UPLOAD
                  </Typography>
                  <br />
                  <div className="upload-image">
                    <input type="file" onChange={this.handleChange} />
                    <br />
                    <br />
                    <div className="upload-image-preview">
                      <img
                        className="selected-image"
                        src={this.state.file}
                        alt="uploadedfile"
                      />
                    </div>
                  </div>
                  <div className="upload-image-description">
                    <FormControl className="formControl">
                      <InputLabel htmlFor="description">Description</InputLabel>
                      <Input id="description-input" />
                    </FormControl>
                  </div>
                  <br />
                  <br />
                  <div className="upload-image-hashtags">
                    <FormControl className="formControl">
                      <InputLabel htmlFor="hashtags">Hashtags</InputLabel>
                      <Input id="hashtags-input" />
                    </FormControl>
                  </div>
                  <br />
                  <br />
                  <div>
                    <Button
                      id="upload-btn"
                      variant="contained"
                      color="secondary"
                    >
                      UPLOAD
                    </Button>
                  </div>
                </Modal>
              </div>
            ) : (
              ""
            )}
            {this.props.profileOptions === "true" ? (
              <div className="profilepage-header">
                <div className="avatar">
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle style={{ fontSize: 48 }} />
                  </IconButton>
                  <StyledMenu
                    id="customized-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                  >
                    <StyledMenuItem onClick={this.handleLogoutClose}>
                      Logout
                    </StyledMenuItem>
                  </StyledMenu>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Header));
