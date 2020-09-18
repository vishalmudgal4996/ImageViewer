import React, { Component } from "react";
import "./Login.css";
import Header from "../../common/header/Header";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
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
    this.state = {};
  }
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
                  <Input id="username" onChange={this.usernameChangeHandler} />
                </FormControl>
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input id="password" onChange={this.passwordChangeHandler} />
                </FormControl>
                <br />
                <br />
                <FormControl className={classes.formControl}>
                  <Button variant="contained" color="primary" id="login-btn">
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
