import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import ScratchedText from './ScratchedText';
import { formatDate } from '../helpers';
import { getUser } from '../data/users';

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
});

export class PrintForm extends React.Component {
  state = {
    company: 'ПОНТЕХ БГ ООД',
  };

  componentDidMount() {
    if (window && window.hasOwnProperty('print')) window.print();
  }

  render() {
    const { company } = this.state;
    const { classes, userName, deputy, fromDate, documentDate, numberOfDays, toDate, additionalText, isPaid } = this.props;

    const position = getUser(userName).position;

    const leaveDaysType = isPaid ? 'платен' : 'неплатен';
    // const leaveDaysType = isPaid ? (
    //   <span> платен ({<ScratchedText text="неплатен" />})</span>
    // ) : (
    //   <span> {<ScratchedText text="платен" />} (неплатен) </span>
    // );

    return (
      <main className={classes.layout}>
        <Grid container spacing={24} justify='center'>
          <Grid item xs={12}>
            <Typography variant='subtitle1' align='center' gutterBottom>
              <b>Молба за ползване на отпуск</b>
            </Typography>
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={4}>
            <Typography variant='subtitle1' align='left'>
              До
            </Typography>
            <Typography variant='subtitle1' align='left' gutterBottom>
              {company}
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Typography variant='h4' align='center' gutterBottom>
              <b>МОЛБА</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle1' align='center' gutterBottom>
              От: {userName}
            </Typography>
            <Typography variant='subtitle1' align='center' gutterBottom>
              Длъжност: {position}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle1' align='justify' gutterBottom>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Бих желал/а ползването на {numberOfDays} {numberOfDays === 1 ? 'ден' : 'дни'} {leaveDaysType}{' '}
              годишен отпуск, считано от {formatDate(fromDate)} до {formatDate(toDate)} включително.
            </Typography>
            <Typography variant='subtitle1' align='justify' gutterBottom>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;По време на отпуската ще бъда заместван/а от {deputy}.
            </Typography>
            <Typography variant='subtitle1' align='justify' gutterBottom>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{additionalText}
            </Typography>
          </Grid>
          <Grid item xs={12} />
          {/* <Grid item xs={12} /> */}
          {/* <Grid item xs={12} /> */}

          <Grid item xs={6} />
          <Grid item xs={6}>
            <Typography variant='subtitle1' align='left'>
              Подпис на Служителя: ............................
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Typography variant='subtitle1' align='left'>
              Подпис на Заместващия: ........................
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Typography variant='subtitle1' align='left'>
              Подпис на Управителя: ...........................
            </Typography>
          </Grid>
          <Grid item xs={12} />

          <Grid item xs={12} />
          <Grid item xs={12}>
            <Typography variant='subtitle1' align='left'>
              гр. София
            </Typography>
            <Typography variant='subtitle1' align='left'>
              Дата: {formatDate(documentDate)}
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12} />
          {/* <Grid item xs={12} /> */}
          {/* <Grid item xs={12} /> */}
          <Grid item xs={12}>
            <Typography variant='subtitle1' align='center'>
              {company}
            </Typography>
          </Grid>
        </Grid>
      </main>
    );
  }
}

PrintForm.propTypes = {
  classes: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  deputy: PropTypes.string.isRequired,
  fromDate: PropTypes.object.isRequired,
  toDate: PropTypes.object.isRequired,
  documentDate: PropTypes.object.isRequired,
  numberOfDays: PropTypes.number.isRequired,
  additionalText: PropTypes.string,
  isPaid: PropTypes.bool.isRequired,
};

export default withStyles(styles)(PrintForm);
