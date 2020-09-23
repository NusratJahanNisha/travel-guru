import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));
function Login() {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    // error: '',
    // success: false
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };





  // const classes = useStyles();
  const signInLogo = [{
    fbLogo: "https://i.ibb.co/CmPcnZm/fb.png"
  },
  {
    googleLogo: "https://i.ibb.co/92DQtQV/google.png"
  }]


  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }



  // Google sign section

  const handleGoogleSignIn = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider).then(function (result) {
      const { displayName } = result.user;
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
    }).catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
  }

  // fb sign in section

  const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider).then(function (result) {
      const { displayName } = result.user;
      const userInfo = {
        name: displayName,
        isSignedIn: true,
      }
      setLoggedInUser(userInfo);
      history.replace(from);
      var token = result.credential.accessToken;
      var user = result.user;
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
  }

  // email and password login section

  const handleBlur = (e) => {
    let isFieldValid;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }

  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch(function (error) {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch(function (error) {
          // const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          // const userInfo = {
          //   name: ,
          //   isSignedIn: true,
          // }
          // setLoggedInUser(newUserInfo);
          // history.replace(from);
        });
    }
    e.preventDefault();
  }
  const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(function () { })
      .catch(function (error) { })
  }


  return (
    <div>
      <Header></Header>
      <p>email: {user.email}</p>
      <p>password: {user.password}</p>
      <p>Name : {user.name}</p>
      <p style={{ color: 'red' }}>{user.error}</p>
      {user.success && <p style={{ color: 'green' }}>User created successfully</p>}
      {/* {user.isSignedIn && <div> <p> Welcome, {user.name}
            </p><p> Your Email: {user.email}</p>
            </div>} */}

      <div style={{ height: '375px', width: '500px', border: '1px solid grey', padding: '20px', marginLeft: '300px' }}>
        <h3><b>Create an account</b></h3>
        <form onClick={handleSubmit}>
          <input onBlur={handleBlur} style={{ width: '450px', height: '40px' }} placeHolder="First Name" type="text" required name="name" className="" /> <br /><br />
          <input onBlur={handleBlur} style={{ width: '450px', height: '40px' }} placeHolder="Email address" type="text" required name="email" className="" /><br /><br />
          <input onBlur={handleBlur} style={{ width: '450px', height: '40px' }} placeHolder="Password" type="text" required name="password" className="" /><br /><br />
          <input type="submit" style={{ backgroundColor: 'yellow', textAlign: 'center', width: '450px', height: '40px' }} value="Create an account" /><br /><br />

          <b><h6 style={{ textAlign: 'center' }} >Already have an account? <small style={{ color: 'yellow', display: 'float', cursor: 'pointer' }}> Login</small> </h6> </b>

        </form>


      </div>















      <h1 style={{ textAlign: 'center' }}> <b> Or </b></h1>

      {/* Fb sign in button */}

      <div onClick={handleFbSignIn} style={{ height: '50px', cursor: 'pointer', width: '500px', borderRadius: '40px', border: '1px solid black', textAlign: 'center', padding: '8px', marginLeft: '300px', marginBottom: '5px' }}> <img style={{ borderRadius: "50%", height: '30px', width: '30px' }} src={signInLogo[0].fbLogo} alt="" /> Continue with Facebook</div>

      {/* Google sign in button */}

      <div onClick={handleGoogleSignIn} style={{ height: '50px', width: '500px', borderRadius: '40px', border: '1px solid black', textAlign: 'center', padding: '8px', cursor: 'pointer', marginLeft: '300px' }}> <img style={{ borderRadius: "50%", height: '30px', width: '30px' }} src={signInLogo[1].googleLogo} alt="" /> Continue with Google</div>

    </div>
  );
};
