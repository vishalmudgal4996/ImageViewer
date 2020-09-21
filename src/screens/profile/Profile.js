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
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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
      allPostsList: [],
      access_token: sessionStorage.getItem("access-token"),
      allMediaData: [],
      postLiked: false,
      likes: 9,
      comment: "",
      commentList: [],
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

  UNSAFE_componentWillMount() {
    //xhr for postsId

    let mediaId = [
      "17849338345926854",
      "17953177057308057",
      "17902481464434859",
      "18031390237207225",
      "17865085762392854",
      "17861994430376807",
      "17887409308328065",
      "18063221656058603",
      "17866284601346963",
      "17879771056075105",
    ];

    //xhr for first post

    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    let access_token = this.state.access_token;
    let mediaData = [];

    let url =
      this.props.baseUrl +
      mediaId[0] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    // xhr for second post

    let xhr0 = new XMLHttpRequest();
    let url0 =
      this.props.baseUrl +
      mediaId[1] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr0.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr0.open("GET", url0);
    xhr0.setRequestHeader("Cache-Control", "no-cache");
    xhr0.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    //xhr for third post

    let xhr1 = new XMLHttpRequest();
    let url1 =
      this.props.baseUrl +
      mediaId[2] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr1.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr1.open("GET", url1);
    xhr1.setRequestHeader("Cache-Control", "no-cache");
    xhr1.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    //xhr for fourth post

    let xhr2 = new XMLHttpRequest();
    let url2 =
      this.props.baseUrl +
      mediaId[3] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr2.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr2.open("GET", url2);
    xhr2.setRequestHeader("Cache-Control", "no-cache");
    xhr2.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    //xhr for fifth post

    let xhr3 = new XMLHttpRequest();
    let url3 =
      this.props.baseUrl +
      mediaId[4] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr3.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr3.open("GET", url3);
    xhr3.setRequestHeader("Cache-Control", "no-cache");
    xhr3.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    //xhr for sixth post

    let xhr4 = new XMLHttpRequest();
    let url4 =
      this.props.baseUrl +
      mediaId[5] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr4.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr4.open("GET", url4);
    xhr4.setRequestHeader("Cache-Control", "no-cache");
    xhr4.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    //xhr for seventh post

    let xhr5 = new XMLHttpRequest();
    let url5 =
      this.props.baseUrl +
      mediaId[6] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr5.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr5.open("GET", url5);
    xhr5.setRequestHeader("Cache-Control", "no-cache");
    xhr5.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    //xhr for eigth post

    let xhr6 = new XMLHttpRequest();
    let url6 =
      this.props.baseUrl +
      mediaId[7] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr6.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr6.open("GET", url6);
    xhr6.setRequestHeader("Cache-Control", "no-cache");
    xhr6.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    //xhr for ninth post

    let xhr7 = new XMLHttpRequest();
    let url7 =
      this.props.baseUrl +
      mediaId[8] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr7.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr7.open("GET", url7);
    xhr7.setRequestHeader("Cache-Control", "no-cache");
    xhr7.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    //xhr for tenth post

    let xhr8 = new XMLHttpRequest();
    let url8 =
      this.props.baseUrl +
      mediaId[9] +
      "?fields=id,media_type,media_url,username,timestamp&access_token=" +
      access_token;
    xhr8.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        mediaData.push(JSON.parse(this.responseText));
      }
    });
    xhr8.open("GET", url8);
    xhr8.setRequestHeader("Cache-Control", "no-cache");
    xhr8.send(data);

    setTimeout(function() {
      that.setState({ allMediaData: mediaData });
    }, 1000);

    //xhr for postsList

    let postData = null;
    let postXhr = new XMLHttpRequest();
    let postUrl =
      this.props.baseUrl +
      "me/media?fields=id,caption&access_token=" +
      access_token;
    let postList = [];
    postXhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        postList.push(JSON.parse(this.responseText).data);
      }
    });
    postXhr.open("GET", postUrl);
    postXhr.setRequestHeader("Cache-Control", "no-cache");
    postXhr.send(postData);

    setTimeout(function() {
      let stringify = JSON.stringify(postList);
      let result = stringify.substring(1, stringify.length - 1);
      let parsedResult = JSON.parse(result);
      that.setState({ allPostsList: parsedResult });
    }, 1000);
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
                    <Typography variant="subtitle1">Posts: 10</Typography>
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
            <div className="profile-body">
              <GridList cellHeight={350} cols={3}>
                {this.state.allMediaData.map((post) => (
                  <GridListTile
                    key={"post" + post.id}
                    className="post-grid-item"
                    onClick={() => this.postClickHandler}
                  >
                    <img
                      src={post.media_url}
                      className="post-poster"
                      alt={post.timestamp}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
