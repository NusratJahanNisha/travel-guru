import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function Login() {
    const classes = useStyles();
    const signInLogo = [{
        fbLogo: "https://i.ibb.co/CmPcnZm/fb.png"
    },
    {
        googleLogo: "https://i.ibb.co/92DQtQV/google.png"
    }]

    
    const [loggedInUser, setLoggedInUser] = useContext( UserContext );
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp( firebaseConfig );
    }

    
    const handleGoogleSignIn = () => {
        
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName,email}= result.user;
            const signedInUser = {name: displayName,email};
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
          });
    }
    return (
        <div>
            <Header></Header>
            <div style={{height: '500px', width:'500px', border:'1px solid grey',padding: '20px',marginLeft:'300px'}}>
                <h3><b>Create an account</b></h3>
            <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="First Name" /> <br/>
      <TextField id="standard-basic" label="Last Name" /><br/>
      <TextField id="standard-basic" label="Username or Email" /><br/>
      <TextField id="standard-basic" label="Password" /><br/>
      <TextField id="standard-basic" label="Confirm Password" /><br/>
      <Button  variant="warning" style={{ textAlign: 'center', width: '400px', height: '40px' }} >
                            Create an account
        </Button>
       <b><h6 style={{textAlign:'center'}} >Already have an account? <small style={{color:'yellow',display:'float'}}> Login</small> </h6> </b> 

    </form>
    {/* <div style={{height:'1px',width: '500px',border:'1px solid black',marginTop:'30px'}}></div> */}
    
    </div>
    <h1 style={{textAlign:'center'}}> <b> Or </b></h1>
    <div  style={{height: '50px', width:'500px',borderRadius:'40px',border:'1px solid black',textAlign:'center',padding:'8px',marginLeft:'300px',marginBottom:'5px'}}> <img style={{borderRadius:"50%",height:'30px', width:'30px' }}src={signInLogo[0].fbLogo} alt=""/> Continue with Facebook</div>
    
    <div onClick={handleGoogleSignIn} style={{height: '50px', width:'500px',borderRadius:'40px',border:'1px solid black',textAlign:'center',padding:'8px',marginLeft:'300px'}}> <img style={{borderRadius:"50%",height:'30px', width:'30px' }}src={signInLogo[1].googleLogo} alt=""/> Continue with Google</div>
   

        </div>
    );
};
