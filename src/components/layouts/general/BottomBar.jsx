import React, { Component } from "react";
import { Link } from "react-router-dom";
class BottomBar extends Component {
  render() {
    return (
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>
                  Privacy Policy | © 2021 Remedy Insurance. All Rights Reserved
                </p>
              </div>
              <div className="menu-footer">
                Developed by{" "}
                <a href="https://diegocorp.github.io/" target="_blank">
                  Diego Sandoval
                </a>
                <a
                  href="https://github.com/Diegocorp?tab=overview&from=2021-05-01&to=2021-05-12"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                &nbsp;
                <a
                  href="https://www.linkedin.com/in/diego-sandoval-83856a212/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              {/* <!-- /.menu-footer --> */}
            </div>
          </div>
        </div>
      </div>
      /* <!-- /.footer-bottom --> */
    );
  }
}

export default BottomBar;
