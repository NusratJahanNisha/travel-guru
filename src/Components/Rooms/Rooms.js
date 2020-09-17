import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Header from '../Header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  export default function Rooms() {
    const classes = useStyles();
    const rooms = [{
        image: "https://i.ibb.co/Rgn5FXk/Rectangle-26.png",
        heading: "Light bright airy stylish ap & safe peaceful stay",
        guest: 4,
        bedrooms: 2,
        beds: 2,
        bath: 2,
        star: "https://i.ibb.co/cktqx9D/star-1.png",
        rating: `4.9(5)`,
        price: `$34/night`,
        total: `$167`
    },
    {
        image: "https://i.ibb.co/7bqJPnt/Rectangle-27.png",
        heading: "Apartment In Lost panorama & safe peaceful journey",
        guest: 2,
        bedrooms: 2,
        beds: 1,
        bath: 1,
        star: "https://i.ibb.co/cktqx9D/star-1.png",
        rating: `4.5(5)`,
        price: `$30/night`,
        total: `$150`
    },
    {
        image: " https://i.ibb.co/MBJXv0N/Rectangle-28.png",
        heading: "AR Lounge & Pool(r&r + b&b )& beautiful moments",
        guest: 3,
        bedrooms: 3,
        beds: 3,
        bath: 2,
        star: "https://i.ibb.co/cktqx9D/star-1.png",
        rating: `4.7(5)`,
        price: `$38/night`,
        total: `$180`
    }]


    return (
        <div className="row">
          <Header></Header>

            <div className="col-md-6">




            <div className={classes.root} >
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={rooms[0].image} />
                  
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                     <strong> {rooms[0].heading}</strong>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {rooms[0].guest} guests {rooms[0].bedrooms} bedrooms {rooms[0].bath} bath {rooms[0].beds} beds
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                     <img style={{height: "12px", width: "12px"}} src={rooms[0].star} alt=""/> <strong>{rooms[0].rating} </strong> total {rooms[0].total}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
    <Typography variant="subtitle1"> <strong>{rooms[0].price}</strong> </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>


        <div className={classes.root}style={{margin: '5px'}} >
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={rooms[1].image} />
                  
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                    <strong>  {rooms[1].heading}</strong>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {rooms[1].guest} guests {rooms[1].bedrooms} bedrooms {rooms[1].bath} bath {rooms[1].beds} beds
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                     <img style={{height: "12px", width: "12px"}} src={rooms[1].star} alt=""/> <strong>{rooms[1].rating} </strong> total {rooms[1].total}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
    <Typography variant="subtitle1"> <strong>{rooms[1].price}</strong> </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>



        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={rooms[2].image} />
                  
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                    <strong>{rooms[2].heading}</strong>  
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {rooms[2].guest} guests {rooms[2].bedrooms} bedrooms {rooms[2].bath} bath {rooms[2].beds} beds
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                     <img style={{height: "12px", width: "12px"}} src={rooms[2].star} alt=""/> <strong> {rooms[2].rating}</strong> total {rooms[2].total}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
    <Typography variant="subtitle1"><strong>{rooms[2].price}</strong> </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>




            </div>
            <div className="col-md-6">
                
            </div>
        </div>

      );
    }
   