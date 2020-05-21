import React from "react";
import { Layout } from "./Layout";
import { Typography, makeStyles, Paper, Grid } from "@material-ui/core";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import { formatCurrency } from "../../utils";

const useStyles = makeStyles((theme) => ({
  analytics: {
    color: "#9D9797",
    fontWeight: "bold",
  },
  overview: {
    color: "#6F6767",
    textTransform: "uppercase",
  },
  date: {
    marginLeft: "auto",
    width: 150,
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: 15,
    },
  },
  paper: {
    marginTop: 30,
  },
  gridContainer: {
    padding: theme.spacing(4),
    marginTop: 30,
  },
  amount: {
    color: "#6F6767",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
}));

export const Dashboard = () => {
  const classes = useStyles();
  const [date, setDate] = React.useState(null);

  React.useEffect(() => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    const currentDate = `${day} / ${month + 1} / ${year}`;
    setDate(currentDate);
  }, []);

  return (
    <Layout>
      <Typography variant="overline" className={classes.analytics}>
        Analytics
      </Typography>
      <Typography className={classes.overview}>Finance Overview</Typography>
      <Paper className={classes.date} elevation={2}>
        <InsertInvitationIcon />
        <span style={{ marginLeft: 10 }}>{date}</span>
      </Paper>

      <Grid
        container
        className={classes.gridContainer}
        justify="center"
        alignItems="center"
        component={Paper}
      >
        <Grid item xs={12} md={3}>
          <Typography variant="overline">Total income</Typography>
          <Typography variant="h4" className={classes.amount}>
            {formatCurrency(854355, "en-NG", "NGN")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="overline">Total income</Typography>
          <Typography variant="h4" className={classes.amount}>
            {formatCurrency(854355, "en-NG", "NGN")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="overline">Total income</Typography>
          <Typography variant="h4" className={classes.amount}>
            {formatCurrency(854355, "en-NG", "NGN")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="overline">Total income</Typography>
          <Typography variant="h4" className={classes.amount}>
            {formatCurrency(854355, "en-NG", "NGN")}
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};
