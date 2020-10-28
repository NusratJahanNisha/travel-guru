import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/core/styles';


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  // sign out

  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
      setUser(signedOutUser);
    }).catch(err => {
    });
  }


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

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
    let isFieldValid = true;
    if (e.target.name === 'name') {
      isFieldValid = e.target.value.length > 4;
    }
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }


  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then( res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name);
        const userInfo = {
          name: newUserInfo.name,
          isSignedIn: true,
        }
        setLoggedInUser(userInfo);
        history.replace(from);
      })
      .catch( error => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }

    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        console.log('sign in user info', res.user);
        const userInfo = {
          name: newUserInfo.email,
          isSignedIn: true,
        }
        setLoggedInUser(userInfo);
        history.replace(from);
      })
      .catch(function(error) {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }

    e.preventDefault();
  }
  // update user name

  const updateUserName = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully')
    }).catch(function(error) {
      console.log(error)
    });
  }


  return (
    <div>
      <Header></Header>

      {/* email password sign in */}
      
      <div style={{ height: '400px', width: '500px', border: '1px solid grey', padding: '20px', marginLeft: '300px' }}>
        <h3><b>Create an account</b></h3>
        <input type="checkbox" style={{margin:'10px' }} onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User Sign up</label>

      <form onSubmit={handleSubmit}>
        {newUser && <input name="name"  type="text" style={{ width: '450px', height: '40px',margin:'10px' }} onBlur={handleBlur} placeholder="Your name"/>}
        <br/>
        <input type="text" name="email" style={{ width: '450px', height: '40px',margin:'10px' }} onBlur={handleBlur} placeholder="Your Email address" required/>
        <br/>
        <input type="password" style={{ width: '450px', height: '40px',margin:'10px' }} name="password" onBlur={handleBlur} placeholder="Your Password" required/>
        <br/>
        <input style={{ width: '450px', height: '40px',margin:'10px' }} type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
      </form>
      
      <p style={{color: 'red', margin:'10px'}}>{user.error}</p>
      { user.success && <p style={{color: 'green', width: '450px', height: '40px',margin:'10px'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}

      <br/>
      </div>

      <h1 style={{ textAlign: 'center' }}> <b> ---------Or-------- </b></h1>

      {/* Fb sign in button */}

      <div onClick={handleFbSignIn} style={{ height: '50px', cursor: 'pointer', width: '500px', borderRadius: '40px', border: '1px solid black', textAlign: 'center', padding: '8px', marginLeft: '300px', marginBottom: '5px' }}> <img style={{ borderRadius: "50%", height: '30px', width: '30px' }} src={signInLogo[0].fbLogo} alt="" /> Continue with Facebook</div>

      {/* Google sign in button */}

      <div onClick={handleGoogleSignIn} style={{ height: '50px', width: '500px', borderRadius: '40px', border: '1px solid black', textAlign: 'center', padding: '8px', cursor: 'pointer', marginLeft: '300px' }}> <img style={{ borderRadius: "50%", height: '30px', width: '30px' }} src={signInLogo[1].googleLogo} alt="" /> Continue with Google</div>

    </div>
  );
};

export default Login;