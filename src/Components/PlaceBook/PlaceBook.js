import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Header from '../Header/Header';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function PlaceBook() {
    const classes = useStyles();
    const { placeName, placeDetails } = useParams();
    const history = useHistory()
    const handleRoomVisit = () => {
        history.push(`/rooms/${placeName}`);
    }

    return (
        <div className="background">
            <Header></Header>

            {/* Description of the selected place */}

            <div className="row">
                <div className="col-md-6" style={{ color: 'White', textAlign: 'center', padding: '50px' }}>
                    <h1>{placeName}</h1>
                    <p>{placeDetails}</p>
                </div>

                {/* Place booking and date set up */}

                <div className="col-md-6">
                    <div style={{ background: 'white', height: '380px', width: '500px', padding: '50px', margin: '10px' }}>
                        <h6 style={{ color: 'grey', margin: '10px' }}>Origin</h6>
                        <input type="text" required className="text" placeholder='Dhaka' style={{ margin: '10px', width: '400px', height: '40px' }} />
                        <h6 style={{ color: 'grey', margin: '10px' }}>Destination</h6>
                        <input type="text" className="text" disabled placeholder={placeName} style={{ margin: '10px', width: '400px', height: '40px' }} /> <br />

                        <div style={{ display: "flex" }}>
                            <form className={classes.container} noValidate>
                                <TextField
                                    id="date"
                                    label="From"
                                    type="date"
                                    defaultValue="2020-01-09"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                />
                            </form>
                            <form className={classes.container} noValidate>
                                <TextField
                                    id="date"
                                    label="To"
                                    type="date"
                                    defaultValue="2020-04-09"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>
                        </div>
                        <br />
                        <Button onClick={handleRoomVisit} variant="warning" style={{ textAlign: 'center', width: '400px', height: '40px' }} >
                            Start Booking
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

