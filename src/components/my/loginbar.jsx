import React, { Component } from 'react';
import PropTypes from 'prop-types';


// const styleSheet = createStyleSheet('MyPanel', theme => ({
//   flex: {
//     flex: 1,
//   },
//   button: {
//     margin: theme.spacing.unit,
//   },
//   list: {
//     width: '100%',
//     background: theme.palette.background.paper,
//     marginTop: 10,
//   },
//   buttonbar: {
//     width: '100%',
//     textAlign: 'center',
//   }
// }));

class loginbar extends Component {
    handleRequestClose = () => {
        window.location = "/auth/signout?returnUrl=/app"
    }
    
    render() {

        return (
            <div  >test
            </div>
        )
    }
}

loginbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default loginbar;