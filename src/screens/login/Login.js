import React, { Component } from "react";
import "./Login.css";
import Header from "../../common/header/Header";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 360,
    maxWidth: 360,
  },
  title: {
    textAlign: "left",
  },
  cardContent: {
    textAlign: "center",
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameRequired: "dispNone",
      password: "",
      passwordRequired: "dispNone",
      invalidCredentials: "dispNone",
    };
  }

  loginClickHandler = () => {
    const username = "desmond";
    const password = "desmond";
    const access_token =
      "IGQVJYTkE1ZAnc2ZA2xWZAWliZAkpZAWm1JUGdSWU9PY2diaU5QaERhMXpyaW1vazdER3ZA4ZAEMzNVRmX3AwMVM0RmRiZAGFiT0dmQ2VfMUtjM2lHZAHM1MlJONnJQU1hFejEtSnd2djFTcjVR";

    if (this.state.username === "" || this.state.password === "") {
      this.state.username === ""
        ? this.setState({ usernameRequired: "dispBlock" })
        : this.setState({ usernameRequired: "dispNone" });

      this.state.password === ""
        ? this.setState({ passwordRequired: "dispBlock" })
        : this.setState({ passwordRequired: "dispNone" });
    } else {
      this.setState({ usernameRequired: "dispNone" });
      this.setState({ passwordRequired: "dispNone" });
      if (
        (this.state.username === username) &
        (this.state.password === password)
      ) {
        this.setState({ invalidCredentials: "dispNone" });
        sessionStorage.setItem("access-token", access_token);
      } else {
        this.setState({ invalidCredentials: "dispBlock" });
      }
    }
  };

  usernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  passwordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className="flex-container">
          <div className="login-card">
            <Card>
              <CardContent className={classes.cardContent}>
                <FormControl className={classes.formControl}>
                  <Typography color="textPrimary" className="card-title">
                    LOGIN
                  </Typography>
                </FormControl>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    id="username"
                    type="text"
                    username={this.state.username}
                    onChange={this.usernameChangeHandler}
                  />
                  <FormHelperText className={this.state.usernameRequired}>
                    <span className="red">required</span>
                  </FormHelperText>
                </FormControl>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type="password"
                    password={this.state.password}
                    onChange={this.passwordChangeHandler}
                  />
                  <FormHelperText className={this.state.passwordRequired}>
                    <span className="red">required</span>
                  </FormHelperText>
                  <br />
                  <FormHelperText className={this.state.invalidCredentials}>
                    <span className="red">
                      Incorrect username and/or password
                    </span>
                  </FormHelperText>
                </FormControl>
                <br />
                <br />
                <FormControl className={classes.formControl}>
                  <Button
                    variant="contained"
                    color="primary"
                    id="login-btn"
                    onClick={this.loginClickHandler}
                  >
                    LOGIN
                  </Button>
                </FormControl>
                <br />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
