import React, { Component } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";

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
});

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <header className="app-header">
          <div className="flex-container-header">
            <div className="app-logo">
              <span className="app-logo-text">Image Viewer</span>
            </div>
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
              <div className="avatar">avatar</div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
