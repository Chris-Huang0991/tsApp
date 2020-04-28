import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function Inputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h1>ENData Login</h1>
      <Input placeholder="Account" inputProps={{ 'aria-label': 'description' }} />
      <Input placeholder="Password" inputProps={{ 'aria-label': 'description' }} />
      <Button variant="contained" color="primary">Login</Button>
    </form>
  );
}