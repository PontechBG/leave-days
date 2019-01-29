// import React from 'react';
// import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Switch from '@material-ui/core/Switch';
// import Select from '@material-ui/core/Select';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import { withStyles } from '@material-ui/core/styles';
// import DatePicker from 'react-datepicker';
// import { countDays } from '../helpers';
// import { getUsers, getDeputiesFor } from '../users';

// const styles = theme => ({
//   layout: {
//     width: '100%',
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     paddingTop: theme.spacing.unit * 5,
//     [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
//       width: 1100,
//       marginLeft: 'auto',
//       marginRight: 'auto'
//     }
//   }
// });

// class InputForm extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     const users = getUsers();
//     const initialUserName = users[0].name;
//     const initialDeputyName = getDeputiesFor(initialUserName)[0].name;

//     this.state = {
//       userName: initialUserName,
//       fromDate: new Date(),
//       toDate: new Date(),
//       deputy: initialDeputyName,
//       isPaid: true
//     };

//     this.onFieldChange = this.onFieldChange.bind(this);
//     this.onReady = this.onReady.bind(this);
//   }

//   onReady() {
//     const data = Object.assign({}, this.state);
//     this.props.onReady(data);
//   }

//   onFieldChange(event) {
//     const fieldName = event.target.name;
//     this.setState({
//       [fieldName]: fieldName === 'isPaid' ? event.target.checked : event.target.value
//     });
//   }

//   render() {
//     const { classes } = this.props;
//     const { userName, fromDate, toDate, deputy, isPaid } = this.state;
//     const users = getUsers();
//     const deputies = getDeputiesFor(userName);

//     return (
//       <main className={classes.layout}>
//         <Grid container spacing={24} justify="center">
//           <Grid item xs={6}>
//             <Typography component="h3" variant="h4" align="center" gutterBottom>
//               Молба при ползване на отпуск
//             </Typography>
//             <Grid container spacing={24}>
//               <Grid item xs={12}>
//                 <InputLabel htmlFor="userName">Име</InputLabel>
//                 <Select
//                   fullWidth
//                   value={userName}
//                   onChange={this.onFieldChange}
//                   inputProps={{
//                     name: 'userName',
//                     id: 'userName'
//                   }}
//                 >
//                   {users.map(user => {
//                     return (
//                       <MenuItem key={user.id} value={user.name}>
//                         {user.name}
//                       </MenuItem>
//                     );
//                   })}
//                 </Select>
//                 <InputLabel htmlFor="deputy">Заместник</InputLabel>
//                 <Select
//                   fullWidth
//                   value={deputy}
//                   onChange={this.onFieldChange}
//                   value={deputies[0].name}
//                   inputProps={{
//                     name: 'deputy',
//                     id: 'deputy'
//                   }}
//                 >
//                   {deputies.map(user => {
//                     return (
//                       <MenuItem key={user.id} value={user.name}>
//                         {user.name}
//                       </MenuItem>
//                     );
//                   })}
//                 </Select>
//                 <InputLabel htmlFor="fromDate">От дата</InputLabel>
//                 <div name="fromDate">
//                   <DatePicker
//                     id="fromDate"
//                     dateFormat="dd.MM.yyyy"
//                     minDate={new Date()}
//                     selected={fromDate}
//                     onChange={date => {
//                       this.setState({ fromDate: date });
//                     }}
//                   />
//                 </div>
//                 <InputLabel htmlFor="toDate">До дата</InputLabel>
//                 <div name="fromDate">
//                   <DatePicker
//                     id="toDate"
//                     dateFormat="dd.MM.yyyy"
//                     minDate={fromDate}
//                     selected={toDate}
//                     onChange={date => {
//                       this.setState({ toDate: date });
//                     }}
//                   />
//                 </div>
//                 <FormControlLabel
//                   control={
//                     <Switch
//                       checked={isPaid}
//                       inputProps={{
//                         name: 'isPaid',
//                         id: 'isPaid'
//                       }}
//                       onChange={this.onFieldChange}
//                       value={isPaid}
//                     />
//                   }
//                   label={isPaid ? 'Платен' : 'Неплатен'}
//                 />
//               </Grid>
//               <Grid style={{ textAlign: 'center' }} item xs={12}>
//                 {countDays(new Date(fromDate), new Date(toDate)) + 1} дни....
//                 <Button variant="contained" color="primary" onClick={this.onReady}>
//                   Принтирай
//                 </Button>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </main>
//     );
//   }
// }

// InputForm.propTypes = {
//   classes: PropTypes.object.isRequired,
//   onReady: PropTypes.func.isRequired
// };

// export default withStyles(styles)(InputForm);
