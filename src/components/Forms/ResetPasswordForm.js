// import React, { useState, useEffect } from 'react';
// import { useStyles } from './Form.styles';
// import { checkEmail, checkPasswordLogin } from './validations';
// import catalogs from '../../constants/catalogs';

// import {
//     TextField,
//     Button,
//     InputAdornment,
//     IconButton,
//     Typography,
// } from '@material-ui/core'

// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// import * as ACTIONS from '../../store/actions';




// const ResetPasswordForm = (props) => {
    
//     const classes = useStyles();
//     const { errors } = catalogs
//     const [error, setError] = useState(true);
//     const [errorMessage, setErrorMessage] = useState('');

//     const [formData, setFormData] = useState({
//         email: undefined,
//     });

//     const { email } = formData;

//     //GENERAL FUNCTIONS
//     const validate = (data) => {
//         const { email } = data;
//         if (!email ) {
//             setError(true)
//             setErrorMessage(errors.default )
//             return false
//         }

//         if (checkEmail(email)) {
//             setError(true)
//             setErrorMessage(errors.mail)
//             return false
//         }

//         setError(false)
//         setErrorMessage('')
//     }



//     //MAIN FUNCTIONS
//     const handleChange = event => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };



//     const handleSignIn = (event) => {
       
//         const { email } = formData;
//         console.log(email)
//         // signIn(email, password);
//         event.preventDefault();
//     }


//     useEffect(() => {
//         if(typeof email !== 'undefined') validate(formData)
//     }, [formData])


//     return (

//         <form onSubmit={handleSignIn} className={classes.form}>
//             <TextField
//                 className={classes.inputs}
//                 label="Correo"
//                 type="email"
//                 size="small"
//                 name="email"
//                 value={email || ''}
//                 onChange={handleChange}
//                 focus="true"
//             />
            
//             {error && <Typography variant="subtitle2" color="error">{errorMessage}</Typography>}
//             <Button
//                 // className={classes.inputs}
//                 variant="contained"
//                 color="primary"
//                 type="submit"
//                 disabled={error}
//                 style={{ textTransform: 'none', marginTop: 10 }}
//             >
//                 Solicitar correo
//            </Button>
//         </form>

//     )
// }





// export default ResetPasswordForm;
