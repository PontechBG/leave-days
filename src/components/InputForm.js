import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getUser, getUsers, getDeputiesFor } from '../data/users';
import { isWorkingDay, countDays } from '../helpers';
import { holidays } from '../data/holidays';
import DatePicker from 'react-datepicker';
import red from '@material-ui/core/colors/red';

import appInfo from '../../package.json';

const styles = (theme) => ({
  layout: {
    width: '100%',
    maxWidth: 700,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 5,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    padding: 30,
  },
  textField: {
    padding: 0,
    margin: 0,
    backgroundColor: red[100],
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50,
  },
  userInput: {
    backgroundColor: red[100],
  },
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
      numberOfDays: 0,
      documentDate: new Date(),
      deputy: initialDeputyName,
      additionalText: null,
      isPaid: true,
    };

    this.highlightDates = this.highlightDates.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  highlightDates() {
    return [
      {
        'react-datepicker__day--highlighted-from-date': [this.state.fromDate],
      },
      {
        'react-datepicker__day--highlighted-to-date': [this.state.toDate],
      },
      {
        'react-datepicker__day--weekend': holidays,
      },
    ];
  }

  handleChange({ fromDate, toDate }) {
    fromDate = fromDate || this.state.fromDate;
    toDate = toDate || this.state.toDate;

    if (fromDate.getTime() > toDate.getTime()) {
      toDate = fromDate;
    }

    this.setState({ fromDate, toDate });
  }

  handleChangeStart(fromDate) {
    this.handleChange({ fromDate });
  }

  handleChangeEnd(toDate) {
    this.handleChange({ toDate });
  }

  onReady() {
    const data = Object.assign({}, this.state);
    data.numberOfDays = countDays(data.fromDate, data.toDate);

    // save to browser's local storage
    localStorage.setItem('leaveDaysUserName', data.userName);
    localStorage.setItem('leaveDaysDeputy', data.deputy);

    this.props.onReady(data);
  }

  onFieldChange(event) {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: fieldName === 'isPaid' ? event.target.checked : event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    const { userName, fromDate, toDate, documentDate, deputy, isPaid } = this.state;
    const numberOfDays = countDays(new Date(fromDate), new Date(toDate));
    const position = getUser(userName).position;
    const users = getUsers();
    const deputies = getDeputiesFor(userName);
    const highlightedDates = this.highlightDates();

    return (
      <main className={classes.layout}>
        <Grid container spacing={24} justify='center'>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <Typography variant='h5' align='center' gutterBottom>
                <b>Молба за ползване на отпуск</b>
              </Typography>
            </Grid>
            <Grid item xs={8} />
            <Fade in={true} timeout={1000}>
              <Grid item xs={12}>
                <Typography variant='subtitle1'>От</Typography>
                <Select
                  autoFocus
                  className={classes.userInput}
                  fullWidth
                  value={userName}
                  onChange={this.onFieldChange}
                  inputProps={{
                    name: 'userName',
                    id: 'userName',
                  }}
                >
                  {users.map((user) => {
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
              <Typography variant='subtitle1' align='center' gutterBottom>
                Длъжност: {position}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle1' align='justify' gutterBottom>
                &nbsp;&nbsp;&nbsp;&nbsp;Бих желал/а ползването на {numberOfDays} {numberOfDays === 1 ? 'ден' : 'дни'}{' '}
                {
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isPaid}
                        inputProps={{
                          name: 'isPaid',
                          id: 'isPaid',
                        }}
                        onChange={this.onFieldChange}
                        value={isPaid}
                      />
                    }
                    label={isPaid ? 'Платен' : 'Неплатен'}
                  />
                }{' '}
                годишен отпуск, считано от{' '}
                {
                  <DatePicker
                    // filterDate={isWorkingDay}
                    highlightDates={highlightedDates}
                    selected={fromDate}
                    onChange={this.handleChangeStart}
                    className={classes.userInput}
                    id='fromDate'
                    dateFormat='dd.MM.yyyy'
                  />
                }{' '}
                до{' '}
                {
                  <DatePicker
                    // filterDate={isWorkingDay}
                    highlightDates={highlightedDates}
                    selected={toDate}
                    onChange={this.handleChangeEnd}
                    className={classes.userInput}
                    id='toDate'
                    dateFormat='dd.MM.yyyy'
                  />
                }{' '}
                включително.
              </Typography>
              <Typography variant='subtitle1' align='justify' gutterBottom>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;По време на отпуската ще бъда заместван от{' '}
                {
                  <Select
                    className={classes.userInput}
                    value={deputy}
                    onChange={this.onFieldChange}
                    inputProps={{
                      name: 'deputy',
                      id: 'deputy',
                    }}
                  >
                    {deputies.map((user) => {
                      return (
                        <MenuItem key={user.id} value={user.name}>
                          {user.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                }
              </Typography>
              <Typography variant='subtitle1' align='justify' gutterBottom>
                Допълнителен текст <br />
                <Input
                  id='filled-basic'
                  className={classes.userInput}
                  fullWidth
                  onChange={(event) => {
                    this.setState({ additionalText: event.target.value });
                  }}
                />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle1' align='left'>
                Датa:&nbsp;
                {
                  <DatePicker
                    filterDate={isWorkingDay}
                    className={classes.userInput}
                    id='documentDate'
                    dateFormat='dd.MM.yyyy'
                    selected={documentDate}
                    onChange={(date) => {
                      this.setState({ documentDate: date });
                    }}
                  />
                }
              </Typography>
            </Grid>
            <Grid style={{ textAlign: 'center' }} item xs={12}>
              <Button variant='contained' color='primary' onClick={this.onReady}>
                Принтирай
              </Button>
            </Grid>
            <Typography variant='caption' align='right' gutterBottom>
              v{appInfo.version}
            </Typography>
          </Paper>
        </Grid>
      </main>
    );
  }
}

InputFormNew.propTypes = {
  classes: PropTypes.object.isRequired,
  onReady: PropTypes.func.isRequired,
};

export default withStyles(styles)(InputFormNew);
