import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
import "./skills.css";

class Skills extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="skills-grid">
          <Cell col={12}>
            <div className="skills-text">
              <p>
                <br />
                Languages:
              </p>
              <ul>
                <li>
                  C++, Java, JavaScript, Python, SQL, Visual Basic, HTML/CSS,
                  Fortran, XML, Curl
                </li>
              </ul>

              <p>
                <br />
                Frameworks:
              </p>
              <ul>
                <li>
                  Qt, React, Ember.js, Node.js, Ant, Apache Velocity, jQuery,
                  Jersey, Jackson
                </li>
              </ul>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Skills;
