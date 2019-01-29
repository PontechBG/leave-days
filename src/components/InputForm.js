import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getUser, getUsers, getDeputiesFor } from '../users';
import DatePicker from 'react-datepicker';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  layout: {
    width: '100%',
    maxWidth: 700,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 5,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  textField: {
    padding: 0,
    margin: 0,
    backgroundColor: red[100],
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50
  },
  userInput: {
    backgroundColor: red[100]
  }
});

class InputFormNew extends React.Component {
  constructor(props, context) {
    super(props, context);

    const initialUserName = localStorage.hasOwnProperty('leaveDaysUserName') ? localStorage.getItem('leaveDaysUserName') : getUsers()[0].name;
    const initialDeputyName = localStorage.hasOwnProperty('leaveDaysDeputy')
      ? localStorage.getItem('leaveDaysDeputy')
      : getDeputiesFor(initialUserName)[0].name;

    this.state = {
      userName: initialUserName,
      fromDate: new Date(),
      toDate: new Date(),
      documentDate: new Date(),
      numberOfDays: 1,
      deputy: initialDeputyName,
      isPaid: true
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  onReady() {
    const data = Object.assign({}, this.state);

    // save to browser's local storage
    localStorage.setItem('leaveDaysUserName', data.userName);
    localStorage.setItem('leaveDaysDeputy', data.deputy);

    this.props.onReady(data);
  }

  onFieldChange(event) {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: fieldName === 'isPaid' ? event.target.checked : event.target.value
    });
  }

  render() {
    const { classes } = this.props;

    const { userName, fromDate, toDate, documentDate, deputy, isPaid, numberOfDays } = this.state;
    const position = getUser(userName).position;
    const users = getUsers();
    const deputies = getDeputiesFor(userName);

    return (
      <main className={classes.layout}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              <b>Молба за ползване на отпуск</b>
            </Typography>
          </Grid>
          <Grid item xs={8} />
          <Fade in={true} timeout={1000}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">От</Typography>
              <Select
                autoFocus
                className={classes.userInput}
                fullWidth
                value={userName}
                onChange={this.onFieldChange}
                inputProps={{
                  name: 'userName',
                  id: 'userName'
                }}
              >
                {users.map(user => {
                  return (
                    <MenuItem key={user.id} value={user.name}>
                      {user.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
          </Fade>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              Длъжност: {position}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Уважаеми г-н Управител,
            </Typography>
            <Typography variant="subtitle1" align="justify" gutterBottom>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Моля да ми разрешите използването на{' '}
              {
                <TextField
                  id="numberOfDays"
                  name="numberOfDays"
                  className={classes.textField}
                  value={numberOfDays}
                  onChange={this.onFieldChange}
                  margin="normal"
                />
              }
              {numberOfDays === 1 ? 'ден' : 'дни'}{' '}
              {
                <FormControlLabel
                  control={
                    <Switch
                      checked={isPaid}
                      inputProps={{
                        name: 'isPaid',
                        id: 'isPaid'
                      }}
                      onChange={this.onFieldChange}
                      value={isPaid}
                    />
                  }
                  label={isPaid ? 'Платен' : 'Неплатен'}
                />
              }{' '}
              годишен отпуск, считано от &nbsp;
              {
                <DatePicker
                  className={classes.userInput}
                  id="fromDate"
                  dateFormat="dd.MM.yyyy"
                  minDate={new Date()}
                  selected={fromDate}
                  onChange={date => {
                    this.setState({ fromDate: date });
                  }}
                />
              }
              &nbsp; до &nbsp;
              {
                <DatePicker
                  className={classes.userInput}
                  id="toDate"
                  dateFormat="dd.MM.yyyy"
                  minDate={fromDate}
                  selected={toDate}
                  onChange={date => {
                    this.setState({ toDate: date });
                  }}
                />
              }
              &nbsp; включително.
            </Typography>
            <Typography variant="subtitle1" align="justify" gutterBottom>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;По време на отпуската ще бъда заместван от{' '}
              {
                <Select
                  className={classes.userInput}
                  value={deputy}
                  onChange={this.onFieldChange}
                  inputProps={{
                    name: 'deputy',
                    id: 'deputy'
                  }}
                >
                  {deputies.map(user => {
                    return (
                      <MenuItem key={user.id} value={user.name}>
                        {user.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              }
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="left">
              Датa:&nbsp;
              {
                <DatePicker
                  className={classes.userInput}
                  id="documentDate"
                  dateFormat="dd.MM.yyyy"
                  minDate={new Date()}
                  selected={documentDate}
                  onChange={date => {
                    this.setState({ documentDate: date });
                  }}
                />
              }
            </Typography>
          </Grid>
          <Grid style={{ textAlign: 'center' }} item xs={12}>
            <Button variant="contained" color="primary" onClick={this.onReady}>
              Принтирай
            </Button>
          </Grid>
        </Grid>
      </main>
    );
  }
}

InputFormNew.propTypes = {
  classes: PropTypes.object.isRequired,
  onReady: PropTypes.func.isRequired
};

export default withStyles(styles)(InputFormNew);
