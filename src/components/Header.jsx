import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Typography} from '@material-ui/core';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Header = ({handleSort, rev}) => {
    const classes = useStyles()
    
    return (
        <AppBar position="sticky" elevation={0} className={classes.appBar}>
            <Typography className={classes.title}>
                Frontend task - displaying a list of restaurants with sort functionality
            </Typography>
            <Button 
            variant="contained" 
            color="primary" 
            style={{margin:'auto'}}
            startIcon ={<SortByAlphaIcon className={classes.icon} />}
            endIcon = {rev ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
            onClick={handleSort}
            >
               Sort restaurants alphabatically
            </Button> 
        </AppBar>
    )
}


export default Header

const useStyles = makeStyles( theme =>({
    appBar: {
        height:'180px',
        [theme.breakpoints.down('sm')]: {
            height:'130px',
        },
        background:'#444',
        color:'#fff',
        margin:'auto',
    },
    title:{
        textAlign:'center',
        paddingTop:30,
        fontSize: 'calc(1vw + 9px)'
    },
    icon:{
        borderWidth:1,
        borderRadius:50,
        borderStyle:'solid',
        padding:2,
        background:'#ff1'
    }
}))