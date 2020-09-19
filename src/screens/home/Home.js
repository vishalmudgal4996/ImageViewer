import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/header/Header";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      postsList: [],
      access_token: sessionStorage.getItem("access-token"),
      allMediaData: [],
    };
  }

  // UNSAFE_componentWillMount() {
  //   //xhr for get posts

  //   let data = null;
  //   let xhr = new XMLHttpRequest();
  //   let that = this;
  //   let access_token = this.state.access_token;
  //   let url =
  //     "https://graph.instagram.com/me/media?fields=id,caption&access_token=" +
  //     access_token;
  //   let mediaId = [];

  //   xhr.addEventListener("readystatechange", function() {
  //     if (this.readyState === 4) {
  //       that.setState({ postsList: JSON.parse(this.responseText).data });
  //       that.state.postsList.forEach((post) => {
  //         mediaId.push(post.id);
  //       });
  //     }
  //   });

  //   xhr.open("GET", url);
  //   xhr.setRequestHeader("Cache-Control", "no-cache");
  //   xhr.send(data);

  //   //xhr for media data

  //   let urlMedia;
  //   let xhrMedia = new XMLHttpRequest();
  //   let dataMedia = null;

  //   setTimeout(function() {
  //     if (mediaId.size !== 0) {
  //       mediaId.forEach((id) => {
  //         // console.log(id);
  //         urlMedia =
  //           "https://graph.instagram.com/" +
  //           id +
  //           "?fields=id,media_type,media_url,username,timestamp&access_token=" +
  //           access_token;
  //         xhrMedia.addEventListener("readystatechange", function() {
  //           if (this.readyState === 4) {
  //             that.setState({ allMediaData: JSON.parse(this.responseText) });
  //           }
  //         });

  //         xhrMedia.open("GET", urlMedia);
  //         xhrMedia.setRequestHeader("Cache-Control", "no-cache");
  //         xhrMedia.send(dataMedia);
  //       });
  //     }
  //   }, 1000);
  // }

  render() {
    return (
      <div>
        <Header searchbox="true" showavatar="true" />
      </div>
    );
  }
}

export default Home;
