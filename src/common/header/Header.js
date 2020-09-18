import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <header className="app-header">
          <div className="app-logo">
            <span className="app-logo-text">Image Viewer</span>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
