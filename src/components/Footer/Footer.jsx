import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.left}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a href="https://www.github.com/linzera" className={classes.a}>
              Sape
            </a>, feito com amor.
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);