import React, { Component } from "react";
import { Grid, Cell, Navigation } from "react-mdl";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.imgur.com/NGwzFFh.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Nathan Marshall</h1>
              <p>
                Hi I'm Nathan! I'm passionate about software development and
                really any sort of coding. I'm most skilled programming in Java
                and C++. I have a moderate amount of experience in Python,
                Javascript, and HTML/CSS. I have 2+ years of experience coding
                for U.S. Naval Research Laboratory in Stennis Space Center.
              </p>
            </div>

            <hr className="banner-hr" />

            <div className="banner-text">
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nathan-marshall-45346b17b/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>LinkedIn</p>
                </a>

                {/* Github */}
                <a
                  href="https://github.com/nmarshall1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>Github</p>
                </a>
                <a
                  href={process.env.PUBLIC_URL + "/resume.pdf"}
                  style={{ cursor: "pointer" }}
                >
                  <p>Resume</p>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
