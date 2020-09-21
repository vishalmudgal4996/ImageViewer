import React, { Component } from "react";
import "./Home.css";
import { withStyles } from "@material-ui/core/styles";
import Header from "../../common/header/Header";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
    maxWidth: "100%",
  },
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      allPostsList: [],
      access_token: sessionStorage.getItem("access-token"),
      allMediaData: [],
      postLiked: false,
      likes: 9,
      comment: "",
      commentList: [],
    };
  }

  postUnlikeHandler() {
    this.setState({ postLiked: false, likes: this.state.likes - 1 });
  }

  postLikeHandler() {
    this.setState({ postLiked: true, likes: this.state.likes + 1 });
  }

  commentChangeHandler = (event) => {
    this.setState({ comment: event.target.value });
  };

  commentAddClickHandler = () => {
    let comments = [];
    comments.push(this.state.comment);
    this.setState({ commentList: comments });
    this.setState({ comment: "" });
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
    const { classes } = this.props;

    return (
      <div>
        <Header homeOptions="true" />
        <div className="posts-flex-container">
          <div className="posts">
            <GridList cellHeight={700} cols={2} className={classes.gridList}>
              {this.state.allMediaData.map((post) => (
                <GridListTile key={"post" + post.id} className="gridlisttile">
                  <Card key={"card" + post.id} className="cardStyle">
                    <CardHeader
                      avatar={
                        <IconButton
                          aria-label="account of current user"
                          aria-controls="customized-menu"
                          aria-haspopup="true"
                          color="inherit"
                        >
                          <AccountCircle style={{ fontSize: 48 }} />
                        </IconButton>
                      }
                      title={post.username}
                      subheader={new Date(post.timestamp).toDateString()}
                    />
                    <CardMedia
                      className={classes.media}
                      image={post.media_url}
                    />
                    <CardContent className={classes.cardContent}>
                      <hr />
                      {this.state.allPostsList.map((captions) => (
                        <span>{captions.caption.split("#")[0]}</span>
                      ))}
                      <br />
                      <div className="hashtag-info">
                        {this.state.allPostsList.map((captions) => (
                          <span>{"#" + captions.caption.split("#")[1]}</span>
                        ))}
                      </div>
                    </CardContent>
                    <CardActions disableSpacing key={"like" + post.id}>
                      {this.state.postLiked ? (
                        <FavoriteIcon
                          fontSize="large"
                          color="secondary"
                          onClick={this.postUnlikeHandler.bind(this)}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          fontSize="large"
                          onClick={this.postLikeHandler.bind(this)}
                        />
                      )}
                      <Typography variant="h6">
                        <span className="like-info">
                          {this.state.likes} likes
                        </span>
                      </Typography>
                    </CardActions>
                    <div className="comments-section">
                      {this.state.commentList.map((comment) => (
                        <div>
                          <span className="comment-username">
                            {post.username} :{" " + comment}
                          </span>
                          <br />
                        </div>
                      ))}
                    </div>
                    <div className="comment-container">
                      <div className="addcomment-input">
                        <FormControl className="formControl">
                          <InputLabel htmlFor="comment">
                            Add a comment
                          </InputLabel>
                          <Input
                            id="comment"
                            onChange={this.commentChangeHandler}
                            value={this.state.comment}
                          />
                        </FormControl>
                      </div>
                      <div className="marginApply">
                        <Button
                          id="comment-btn"
                          variant="contained"
                          color="primary"
                          onClick={this.commentAddClickHandler.bind(this)}
                        >
                          ADD
                        </Button>
                      </div>
                    </div>
                  </Card>
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
