import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="experience-grid">
          <Cell col={12}>
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
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
