import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Designed by{" "}
            <a target="_blank" rel="noopener noreferrer">
              Team Avocets
            </a>
            . Coded by{" "}
            <a target="_blank" rel="noopener noreferrer">
              Piyush Mehta
            </a>
            .
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
