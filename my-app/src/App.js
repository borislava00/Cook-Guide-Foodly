
import './App.css';
import { ingredientsListBreakfast1, ingredientsListBreakfast2 } from './ingredientsList';
import { AppBar, Box, makeStyles, Typography, Container} from '@material-ui/core/';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Slider from './slider.js'
import { Ingredients } from './ingredients';
import Brightness4Icon from '@material-ui/icons/Brightness4';


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
  breakfast1:{
    height: '400px',
    width: '400px',
    marginLeft: '15px'
  },
  breakfast2:{
    height: '400px',
    width: '400px',
    marginRight: '15px'
  }
}));


export function App() {
  const classes = useStyles();


  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Box>
          <img src="logo.png" alt='' className={classes.logoImg}/>
        </Box>
        <Typography variant='h3' style={{fontFamily: 'FreeMono'}}>Cook Book</Typography>
        <IconButton style={{position: 'absolute', right: '100px'}}><Brightness4Icon/></IconButton>
        <IconButton color="black"  style={{position: 'absolute', right: '30px'}}><FavoriteBorderIcon /></IconButton>
      </AppBar>
      <Slider/>
      <Container style={{ display: 'flex', flexDirection: 'row' , marginTop:'100px'}}>
        <Box>
          <img src="breakfast1.jpg"  alt='' className={classes.breakfast1}/>
        </Box>
        <Container>
          <Ingredients ingredients={ingredientsListBreakfast1}></Ingredients>
        </Container>
      </Container>
      <Container style={{ display: 'flex', flexDirection: 'row', marginTop: '100px'}}>
        <Container style={{ backgroundColor: 'grey'}}>
          <Box style={{marginLeft:'410px'}}>
            <Ingredients ingredients={ingredientsListBreakfast2}></Ingredients>
          </Box>
        </Container>
        <Box>
          <img src="breakfast2.jpg"  alt='' className={classes.breakfast2}/>
        </Box>
      </Container>
   </div>
  );
}
