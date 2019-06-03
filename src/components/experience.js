import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./experience.css";

class Experience extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Grid className="experience-grid">
          <Cell col={12}>
            <div className="experience-text">
              <h1>U.S. Naval Research Laboratory</h1>
              <p>Software Developer</p>
              <p>2017-Present</p>
              <ul>
                <li>
                  Java backend development for multiple web services. Designed
                  server side functionality and data analysis.
                </li>
                <li>
                  C++ thick client development. Designed client side
                  functionality and data analysis for a post mission analysis
                  system.
                </li>
                <li>
                  Python scripting. Wrote and modified test scripts used for
                  quality assurance. Used python scripts to interact with web
                  services; simulated all client requests and responses.
                </li>
                <li>
                  Used Qt C++ framework to modify client side UI. Improved UI
                  components (maps, tables, charts) to better convey data.
                </li>
                <li>
                  Restful web services development. Designed endpoints for
                  server side requests and responses (GET, POST, PUT, etc).
                </li>
                <li>
                  Used Agile Software Methodology to collaborate with developers
                  over large scale projects.
                </li>
              </ul>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
