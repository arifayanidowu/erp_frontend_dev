import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(/img/login.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "100vh",
    height: "100%",
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
    fontWeight: 400,
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
    e.persist();
    setState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className={classes.root}>
      <div style={{ paddingTop: 30, paddingLeft: 30 }}>
        <Link to="/">
          <img src="/img/Logo2.png" alt="Logo" width="100" />
        </Link>
      </div>
      <Card className={classes.card}>
        <form
          className={(classes.centered, classes.form)}
          onSubmit={handleSubmit}
        >
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
            id="email"
            value={state.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={isPassword ? "text" : "password"}
            color="primary"
            id="password"
            value={state.password}
            onChange={handleChange}
            fullWidth
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={showVisibility}
                    edge="end"
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
            <Link to="/vendor/register" className={classes.link}>
              Are you a new vendor? Click to create account
            </Link>
          </Grid>
        </Grid>
      </Card>
      {/* </Container> */}
    </div>
  );
};
