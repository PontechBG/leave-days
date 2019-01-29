import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { yearHasChanged } from '../data/holidays';
import YearWarningDialog from './YearWarningDialog';
import InputForm from './InputForm';
import PrintForm from './PrintForm';

const styles = theme => ({
  layout: {
    width: '100%',
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

class MainPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      yearWarning: yearHasChanged(new Date()),
      isReadyForPrint: false,
      userName: '',
      fromDate: new Date(),
      toDate: new Date(),
      deputy: '',
      isPaid: true
    };

    this.onReady = this.onReady.bind(this);
    this.onYearWarningDialogClose = this.onYearWarningDialogClose.bind(this);
  }

  onReady(data) {
    this.setState({
      isReadyForPrint: true,
      userName: data.userName,
      fromDate: data.fromDate,
      toDate: data.toDate,
      documentDate: data.documentDate,
      numberOfDays: data.numberOfDays,
      deputy: data.deputy,
      isPaid: data.isPaid
    });
  }

  onYearWarningDialogClose() {
    this.setState({
      yearWarning: false
    });
  }

  render() {
    const { classes } = this.props;
    const { yearWarning, isReadyForPrint, userName, fromDate, toDate, documentDate, numberOfDays, deputy, isPaid } = this.state;

    return (
      <main className={classes.layout}>
        <YearWarningDialog open={yearWarning} onClose={this.onYearWarningDialogClose} />
        {isReadyForPrint ? (
          <PrintForm
            userName={userName}
            fromDate={fromDate}
            toDate={toDate}
            documentDate={documentDate}
            numberOfDays={numberOfDays}
            deputy={deputy}
            isPaid={isPaid}
          />
        ) : (
          <InputForm onReady={this.onReady} />
        )}
      </main>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPage);
