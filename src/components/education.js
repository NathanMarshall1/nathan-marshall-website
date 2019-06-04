import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./education.css";

class Education extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid>
          <Cell col={12}>
            <div className="education-text">
              <h1>Bachelor of Science in Computer Science</h1>
              <h2>The University of Southern Mississippi</h2>
              <h2>December 2017 - Hattiesburg, MS</h2>
              <p>
                <br />
                Coursework Experience:
              </p>
              <ul>
                <li>Problem-Solving Using C and Java</li>
                <li>Database Management and Design</li>
                <li>Android App Development</li>
                <li>Visual Studio Web App Development</li>
                <li>AI Programming Using Algorithms</li>
              </ul>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
