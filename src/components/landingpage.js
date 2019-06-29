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
              src="https://lh3.googleusercontent.com/lXbvMSXgSn7usrja1lotEsRg983TkEEH3UDXEiUY8oGcEOeOKzL4fsR5ccwk6BWtwaRKYweOQRUjHjZNIXApLfVtW-cgRQtPg-GwVuLXTqYwSca1eHKrJz5atCO411aL-hNSJWPCb27E6-GJj-kq3Y5VYDgFNFfRo80pU-ForQNenA660OTsJw0eYuQae0AjnPlx0H0pRwyvx5S8MaqCOR7UeZSiWqXRsnUuZ8ocy8T7p-RlDF-WOGXt_LSwHsH7R2hNKcIyw27As6rz8gfWWSB01sXOsEGVl-CQzdXk5RCqZTUkeCiXWkav9EJO2pjUt9Z3_APc4g_yvpbkjgvmS1e6ft7Xtodp10MPiGUdDFcs8IppLt4KL6GeXx42jn1hRk815s-wIWkuiuDAXiPvnTTgXELzCi58Ji7K-VXTfCnfEytIQeSY4BKU9N80QHBHv5FjTGDag_8hXA742luwLnkGzLFA8y4FSw3W0HCGULwRomg-XlEuWzYBJa7Z7yFlsvZ2QDP5GUVS39FRqxa2eCJA_y9CqOKZjVW0v8wdcdcTbnqS62aWOoyOSfO4oaBtDC_l8SPaYgiL33rxPKACBxumYFsNcZfPDXs6AH0gVkXw4CwnJYvz5FM700HieTUHllrYwEqn3F1Qtel0tNpwutVq2KN1hwjWF7gBPtbpN5NVnpHUQ26XO_F5ZHdDlDvq0yZfEBX0Ws2LH9DMgWBYIRPL=w1415-h1885-no"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Nathan Marshall</h1>
              <p>
                Hi I'm Nathan. I'm passionate about software development and
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
                  /*href={process.env.PUBLIC_URL + "/resume.pdf"}*/
                  href="https://docs.google.com/document/d/10BvwMinXUZXYN345myCWFddosx0TW-0EZeKIKkNvV7s/edit?usp=sharing"
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
