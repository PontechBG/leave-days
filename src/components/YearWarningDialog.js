import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class YearWarningDialog extends React.Component {
  render() {
    return (
      <Dialog open={this.props.open} aria-labelledby="year-warning-dialog" aria-describedby="year-warning-dialog">
        <DialogTitle id="year-warning-dialog-title">Another year has passed!</DialogTitle>
        <DialogContent>
          <DialogContentText id="year-warning-dialog-description">Did you update holidays for current year?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

YearWarningDialog.protoTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default YearWarningDialog;
