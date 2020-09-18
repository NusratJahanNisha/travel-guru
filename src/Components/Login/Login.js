import React, { useContext, useState } from 'react';
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
    const [user,setUser] = useState({
      isSignedIn : false,
      name: '',
      email: '',
      password: '',
      error: '',
      success: false,
      newUser: false
    })
    
    const handleGoogleSignIn = () => {
        
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName,email}= result.user;
            // const signedInUser = {
            //   isSignedIn: true ,
            //   name: displayName,
            //   email: email};
            //   setLoggedInUser(signedInUser);
              const userInfo = {
                name: displayName,
                isSignedIn: true,
              }
            setLoggedInUser(userInfo);
            history.replace(from);
          }).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
          });
    }
    const handleFbSignIn = () => {
      const  fbProvider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        const {displayName,email}= result.user;
        const userInfo = {
          name: displayName,
          isSignedIn: true,
        }
      setLoggedInUser(userInfo);
      history.replace(from);
        var token = result.credential.accessToken;
        var user = result.user;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
    }
    const handleBlur = (e) => { let isFieldValid;
      if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if( e.target.name === 'password'){
        const isPasswordValid = e.target.length > 6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
      }
      if (isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
      
    }
    const handleSubmit = (e) => {
      if(user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
          const errorMessage = error.message;
          const newUserInfo = {...user};
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo)
          // ...
        });
      }
      e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
    <p>email: {user.email}</p>
    <p>password: {user.password}</p>
    <p style={{color: 'red'}}>{user.error}</p>
    {user.success && <p style={{color:'green'}}>User created successfully</p>}
            {/* {user.isSignedIn && <div> <p> Welcome, {user.name}
            </p><p> Your Email: {user.email}</p>
            </div>} */}
            <div style={{height: '500px', width:'500px', border:'1px solid grey',padding: '20px',marginLeft:'300px'}}>
                <h3><b>Create an account</b></h3>
            <form  onClick={handleSubmit}>
              <input onBlur={handleBlur} placeHolder="First Name" type="text" required name="firstName" className=""/>
              <input onBlur={handleBlur} placeHolder="Last Name" type="text" required name="lastName" className=""/>
              <input onBlur={handleBlur} placeHolder="Email address" type="text" required name="email" className=""/>
              <input onBlur={handleBlur} placeHolder="Password" type="text" required name="password" className=""/>
              <input onBlur={handleBlur} placeHolder="Confirm Password" type="text" required name="confirmPassword" className=""/>
              <input type="submit" value="Create an account"/>
      {/* <TextField id="standard-basic" label="First Name" /> <br/>
      <TextField id="standard-basic" label="Last Name" /><br/>
      <TextField id="standard-basic" label="Username or Email" /><br/>
      <TextField id="standard-basic" label="Password" /><br/>
      <TextField id="standard-basic" label="Confirm Password" /><br/>
      <Button  variant="warning" style={{ textAlign: 'center', width: '400px', height: '40px' }} >
                            Create an account
        </Button> */}
       <b><h6 style={{textAlign:'center'}} >Already have an account? <small style={{color:'yellow',display:'float', cursor:'pointer'}}> Login</small> </h6> </b> 

    </form>
    {/* <div style={{height:'1px',width: '500px',border:'1px solid black',marginTop:'30px'}}></div> */}
    
    </div>
    <h1 style={{textAlign:'center'}}> <b> Or </b></h1>
    <div onClick={handleFbSignIn} style={{height: '50px', cursor:'pointer', width:'500px',borderRadius:'40px',border:'1px solid black',textAlign:'center',padding:'8px',marginLeft:'300px',marginBottom:'5px'}}> <img style={{borderRadius:"50%",height:'30px', width:'30px' }}src={signInLogo[0].fbLogo} alt=""/> Continue with Facebook</div>
    
    <div onClick={handleGoogleSignIn} style={{height: '50px', width:'500px',borderRadius:'40px',border:'1px solid black',textAlign:'center',padding:'8px', cursor:'pointer' , marginLeft:'300px'}}> <img style={{borderRadius:"50%",height:'30px', width:'30px' }}src={signInLogo[1].googleLogo} alt=""/> Continue with Google</div>
   

        </div>
    );
};
