import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import ScratchedText from './ScratchedText';
import { formatDate } from '../helpers';
import { getUser } from '../users';

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
  }
});

class PrintForm extends React.Component {
  componentDidMount() {
    window.print();
  }

  render() {
    const { classes, userName, deputy, fromDate, documentDate, numberOfDays, toDate, isPaid } = this.props;

    const position = getUser(userName).position;

    const leaveDaysType = isPaid ? 'платен' : 'неплатен';
    // const leaveDaysType = isPaid ? (
    //   <span> платен ({<ScratchedText text="неплатен" />})</span>
    // ) : (
    //   <span> {<ScratchedText text="платен" />} (неплатен) </span>
    // );

    return (
      <main className={classes.layout}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              <b>Молба за ползване на отпуск</b>
            </Typography>
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left">
              До
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
              Управителя на Понтех БГ ЕООД
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              <b>МОЛБА</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              От: {userName}
            </Typography>
            <Typography variant="subtitle1" align="center" gutterBottom>
              Длъжност: {position}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Уважаеми г-н Управител,
            </Typography>
            <Typography variant="subtitle1" align="justify" gutterBottom>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Моля да ми разрешите използването на {numberOfDays} {numberOfDays === 1 ? 'ден' : 'дни'}{' '}
              {leaveDaysType} годишен отпуск, считано от {formatDate(fromDate)} до {formatDate(toDate)} включително.
            </Typography>
            <Typography variant="subtitle1" align="justify" gutterBottom>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;По време на отпуската ще бъда заместван от {deputy}.
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left">
              Подпис на заместващия: ............................
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="right">
              С уважение: ............................
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={6}>
            <Typography variant="subtitle1" align="left">
              Подпис на управителя: ............................
            </Typography>
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="left">
              гр. София
            </Typography>
            <Typography variant="subtitle1" align="left">
              Дата: {formatDate(documentDate)}
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center">
              Понтех БГ ЕООД, бул. Христо Смирненски 23, www.pontech.bg
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
  isPaid: PropTypes.bool.isRequired
};

export default withStyles(styles)(PrintForm);
