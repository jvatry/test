import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  createStyles,
  MenuItem,
  Paper,
  Select,
  Theme,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    paperTitle: {
      backgroundColor: "#000",
      color: "#FFF",
      textAlign: "left",
      paddingLeft: theme.spacing(1)
    },
    label: {
      fontWeight: "bold",
      textAlign: "left",
      marginLeft: theme.spacing(2)
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "80%"
    },
    select: {
      margin: theme.spacing(1),
      width: "80%"
    }
  })
);

export default function Members() {
  const classes = useStyles();

  return (
    <Paper>
      <Typography className={classes.paperTitle} variant="h5" gutterBottom>
        Invite members
      </Typography>
      <InputLabel className={classes.label} htmlFor="input-search-member">
        Search for members
      </InputLabel>
      <TextField
        id="input-search-member"
        className={classes.textField}
        placeholder="Type firstname or lastname"
        margin="normal"
      />
      <InputLabel
        className={classes.label}
        id="label-select-role"
        htmlFor="input-search-member"
      >
        Choose a role permission
      </InputLabel>
      <Select
        className={classes.select}
        labelId="label-select-role"
        id="select-role"
        fullWidth
        value={""}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"manager"}>Manager</MenuItem>
        <MenuItem value={"encoder"}>Encoder</MenuItem>
      </Select>
    </Paper>
  );
}
