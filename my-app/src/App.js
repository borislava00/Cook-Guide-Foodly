
import './App.css';
import { AppBar, Box, makeStyles, Typography} from '@material-ui/core/';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Slider from './slider.js'

const useStyles = makeStyles(({
  appBar:{
    height: '70px', 
    backgroundColor: 'grey', 
    display: 'flex', 
    justifyContent: 'end', 
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
  },
  logoImg:{
    height: '65px', 
    width: '65px',
    marginLeft: '10px',
  },
}));


export function App() {
  const classes = useStyles();


  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Box>
          <img src="logo.png" className={classes.logoImg}/>
        </Box>
        <Typography variant='h3' style={{fontFamily: 'FreeMono'}}>Cook Book</Typography>
        <IconButton color="black"  style={{position: 'absolute', right: '30px'}}><FavoriteBorderIcon /></IconButton>
      </AppBar>
      <Slider/>
   </div>
  );
}
