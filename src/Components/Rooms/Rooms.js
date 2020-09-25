import React, { useContext } from 'react';
import Header from '../Header/Header';
import { UserContext } from '../../App';
import Sajek from '../Map/Sajek';
import { useLocation, useParams } from 'react-router-dom';
import { Sundarbans } from '../Map/Sundarbans';
import { Sreemongol } from '../Map/Sreemongol';
import rooms from '../FakeData/rooms';
import RoomDetails from '../RoomDetails/RoomDetails';

const Rooms = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { placeName } = useParams();
  const location = useLocation();
  console.log(location);

  

  return (
    <div>
      <div>
        <Header></Header>
        <h1 style={{ textAlign: "center", color: "black" }}>Welcome, {loggedInUser.name} <h3 style={{ color: 'grey' }}>Thank you for choosing our hotel.</h3> <h4 style={{ color: 'grey' }}>Please select your room and book it.</h4> </h1>
        <div className="row" style={{ paddingTop: '50px' }}>

          {/* Room details of last page */}

          <div className="col-md-6">

            <h5 style={{ color: 'lightGrey' }}>252 stays apr 13-17 3 guest</h5>
            <h5>Stay in {placeName}</h5>
            {rooms.map(room => <RoomDetails room={room}></RoomDetails>)}
          </div>

          {/* Map for last page */}
          <div className="col-md-6">          
            <h2 style={{ textAlign: 'center' }}>{placeName} map is below</h2>
            {
               location.pathname === '/rooms/SUNDARBANS' && 
               (<Sundarbans ></Sundarbans>) 
            }
            {
               location.pathname === '/rooms/SAJEK' && 
               (<Sajek ></Sajek>) 
            }
            {
               location.pathname === '/rooms/SREEMANGAL' && 
               (<Sreemongol></Sreemongol>) 
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;