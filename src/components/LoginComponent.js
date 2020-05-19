import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles, InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from "@material-ui/core/Grid";
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

export const LoginComponent = () => {
  const classes = useStyles();
  const [isPassword, showIsPassword] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const showVisibility = () => {
    showIsPassword(!isPassword);
  };

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className={classes.root}>
      {/* <Container maxWidth="lg" className={classes.container}> */}
      {/* <Typography component="h4" variant="h6">
          LOGO
        </Typography> */}
      <div style={{ paddingTop: 30, paddingLeft: 30 }}>
        <Link to="/">
          <img src="/Logo2.png" alt="Logo" width="100" />
        </Link>
      </div>
      <Card className={classes.card}>
        <form className={(classes.centered, classes.form)}>
          <Typography align="center" gutterBottom className={classes.loginText}>
            LOGIN
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            color="primary"
            fullWidth
            className={classes.textField}
            required
            name="email"
            value={state.email}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={isPassword ? "text" : "password"}
            color="primary"
            name="password"
            value={state.password}
            fullWidth
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={showVisibility}
                  >
                    {isPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            fullWidth
            className={classes.btn}
          >
            Login
          </Button>
        </form>
        <Grid container alignContent="space-between">
          <Grid item md={6} xs={12}>
            <Link to="/forgotpass" className={classes.link}>
              Forgot Password?
            </Link>
          </Grid>
          <Grid item md={6} xs={12}>
            <Link to="/" className={classes.link}>
              Are you a new vendor? Click to create account
            </Link>
          </Grid>
        </Grid>
      </Card>
      {/* </Container> */}
    </div>
  );
};
