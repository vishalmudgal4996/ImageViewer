import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/header/Header";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      postsList: [],
      access_token: sessionStorage.getItem("access-token"),
    };
  }

  UNSAFE_componentWillMount() {
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    let access_token = this.state.access_token;
    let url =
      "https://graph.instagram.com/me/media?fields=id,caption&access_token=" +
      access_token;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        that.setState({ postsList: JSON.parse(this.responseText).data });
        console.log(that.state.postsList);
      }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Home;
