import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(/login.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    color: "#fefefe",
    overflow: "hidden",
    paddingLeft: 24,
    paddingRight: 24,
  },
  centered: {
    // color: "#fefefe"
  },
  card: {
    margin: "0 auto",
    marginTop: "130px",
    padding: theme.spacing(6),
    maxWidth: 650,
    [theme.breakpoints.down("sm")]: {
      //   maxWidth: 200,
      width: "100%",
    },
  },
  form: {
    // width: "100%"
  },
  textField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  btn: {
    padding: theme.spacing(2),
  },
  container: {
    // paddingTop: theme.spacing(4),

    width: "100%",
  },
  loginText: {
    fontWeight: "bold",
  },
  link: {
    fontSize: 13,
  },
}));

export const ForgotPassword = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ paddingTop: 30, paddingLeft: 30 }}>
        <Link to="/">
          <img src="/Logo2.png" alt="Logo" width="100" />
        </Link>
      </div>
      <Card className={classes.card}>
        <form className={(classes.centered, classes.form)}>
          <Typography
            align="center"
            variant="h3"
            gutterBottom
            className={classes.loginText}
          >
            Forgot Your Password?
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            color="primary"
            fullWidth
            className={classes.textField}
            required
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className={classes.btn}
          >
            Email Me
          </Button>
        </form>
      </Card>
    </div>
  );
};
