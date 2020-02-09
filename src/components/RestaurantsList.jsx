import React,{useState,useEffect} from 'react'
import Header from './Header';

import {connect} from 'react-redux';
import {getData, sortByNameAZ, sortByNameZA} from '../store/actions'

import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent, CardMedia, Grid } from '@material-ui/core';


const RestaurantsList = ({data, getData, sortByNameAZ, sortByNameZA}) => {
    const classes = useStyles();
    const [sort,setSort] = useState(null)
    const [rev,setRev] = useState(false)
    useEffect(() => {
        getData()
    });
    const handleSort = () =>{
            if(rev === false){
                setSort(sortByNameAZ(data))
                setRev(true)
            }else{
                setSort(sortByNameZA(data))
                setRev(false)
            }     
    }
    
    return (
        <div>
            <Header handleSort={handleSort} rev={rev}/>
        <Grid container className={classes.container}>
            {data.map((restaurant,index) => <Grid item xs={12} md={6} className={classes.card} key={index}>
            <Card variant="outlined" key={index}>
                <CardMedia
                component="img"
                alt="restaurant image"
                height="140"
                image= {restaurant.image}
                />
                <CardContent>
                    <Typography variant="h6">
                        {restaurant.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {restaurant.description}
                    </Typography>
                </CardContent>
          </Card>
          </Grid>)}
        </Grid>
        </div>
    )
}

const mapStateToProps = state =>({
    data: state.restaurants
});


export default connect(mapStateToProps,{getData,sortByNameAZ,sortByNameZA})(RestaurantsList)


const useStyles = makeStyles(theme => ({
    container: {
      flexGrow:1,
      margin:'auto',
      padding: theme.spacing(0,5)
    },
    card: {
        padding: theme.spacing(2,4),
    },
    
  }));
