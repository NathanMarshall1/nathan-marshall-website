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
                about me: this is summary yo my name is cory and this is my
                story Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
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
