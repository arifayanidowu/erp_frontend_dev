import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
  Stepper,
  Step,
  CardHeader,
  StepLabel,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import { useTheme } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "url(/img/vendorreg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // height: "100vh",
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    margin: "0 auto",
    marginTop: "40px",
    padding: theme.spacing(6),

    [theme.breakpoints.down("sm")]: {
      //   maxWidth: 200,
      width: "100%",
    },
  },
  textField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  btn: {
    padding: theme.spacing(2),
    marginTop: 20,
  },
  message: {
    fontFamily: "Rubik",
  },
}));

export const VendorRegister = () => {
  const [activeStep, setActiveStep] = useState(4);
  const [isPassword, showIsPassword] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    setActiveStep(4);
  }, []);

  const showVisibility = () => {
    showIsPassword(!isPassword);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ paddingTop: 30, paddingLeft: 30 }}>
        <Link to="/">
          <img src="/img/Logo2.png" alt="Logo" width="100" />
        </Link>
      </div>

      <Card className={classes.card}>
        <CardHeader
          title={
            <Typography
              align="center"
              variant="h5"
              gutterBottom
              style={{
                marginBottom: 25,
                fontFamily: "Rubik",
                fontWeight: 900,
              }}
            >
              NEW VENDOR REGISTRATION
            </Typography>
          }
        />
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} md={6}>
            <Typography variant="h6">HOW TO REGISTER</Typography>
            <Typography variant="overline">
              To begin the registration process, kindly do the following:
            </Typography>
            <Stepper
              activeStep={activeStep}
              orientation="vertical"
              //   variant="outlined"
              style={{
                backgroundColor: "transparent",
                // textAlign: "start",
                marginLeft: -25,
              }}
            >
              <Step>
                <StepLabel>
                  <Typography className={classes.message}>
                    Fill the form fields with the required details
                  </Typography>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <Typography className={classes.message}>
                    You will receive an email with a link to verify your account
                  </Typography>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <Typography className={classes.message}>
                    When you click on the link in the email message, you will be
                    asked to login
                  </Typography>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <Typography className={classes.message}>
                    login and complete the rest of the registration process.
                  </Typography>
                </StepLabel>
              </Step>
            </Stepper>
            <Typography
              variant="subtitle1"
              color="secondary"
              className={classes.message}
              //   align="center"
            >
              * Please kindly follow the steps.
            </Typography>
          </Grid>

          <Grid item md={6} xs={12}>
            <form>
              <TextField
                label="Company Name"
                variant="outlined"
                type="text"
                color="primary"
                fullWidth
                className={classes.textField}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                color="primary"
                fullWidth
                className={classes.textField}
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                type={isPassword ? "text" : "password"}
                color="primary"
                fullWidth
                className={classes.textField}
                required
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
              />
              <>
                <Checkbox />
                <span style={{ fontWeight: "400", fontFamily: "Rubik" }}>
                  I agree to RusselSmith's{" "}
                  <Link to="#" style={{ color: theme.palette.secondary.light }}>
                    Terms of use
                  </Link>{" "}
                  &amp;{" "}
                  <Link to="#" style={{ color: theme.palette.secondary.light }}>
                    Privacy Policy
                  </Link>
                </span>
              </>

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                className={classes.btn}
                disabled={true}
              >
                Register
              </Button>
            </form>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};
