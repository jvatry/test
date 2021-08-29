import React from "react";

import { User } from "./UserModel";
import { Role } from "./RoleModel";

import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650
    },
    tableHead: {
      fontWeight: "bold",
      fontSize: 15
    },
    chip: {
      margin: theme.spacing(0.5)
    }
  })
);

interface IChipData {
  key: number;
  label: string;
}

interface IProps {
  rows: Array<{
    id: string;
    user: User;
    granted_by: User;
    granted_at: Date;
    roles: Array<Role>;
  }>;
}

export default function MembersTable({ rows }: IProps) {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>User</TableCell>
            <TableCell className={classes.tableHead}>Access Granted</TableCell>
            <TableCell className={classes.tableHead}>Role(s)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>JV</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      row.user
                        ? row.user.firstname + " " + row.user.lastname
                        : null
                    }
                    secondary={row.user ? row.user.email : null}
                  />
                </ListItem>
              </TableCell>
              <TableCell>
                <ListItem>
                  <ListItemText
                    primary="By Jean Du Moulin"
                    secondary="on 11/02/1967"
                  />
                </ListItem>
              </TableCell>
              <TableCell>
                {row.roles
                  ? row.roles.map((role) => (
                      <Chip
                        label={role.name}
                        onDelete={handleDelete}
                        className={classes.chip}
                        color="primary"
                      />
                    ))
                  : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
