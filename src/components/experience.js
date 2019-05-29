import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./experience.css";

class Experience extends Component {
  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Grid className="experience-grid">
          <Cell col={12}>
            <div className="experience-text">
              <h1>U.S. Naval Research Laboratory</h1>
              {/* <hr className="experience-hr" /> */}
              <p>Internship</p>
              <ul>
                <li>
                  Coffeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                </li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
              {/* <hr className="experience-hr" /> */}
              <p>Software Developer</p>
              <ul>
                <li>
                  Coffeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                </li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
