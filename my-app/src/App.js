
import './App.css';
import { ingredientsListBreakfast1, ingredientsListBreakfast2, ingredientsListBreakfast3 } from './ingredientsList';
import { AppBar, Box, makeStyles, Typography, Container,} from '@material-ui/core/';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Slider from './slider.js'
import { Ingredients } from './ingredients';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CustomizedDialogs from './recipeInstructions';

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
  recepiPicture:{
    height: '400px',
    width: '400px',
    marginBottom: '-3px'
  },
  recipeStyle:{
    display: 'flex', 
    flexDirection: 'row', 
    marginTop: '100px',
    padding: 0, 
    justifyContent: 'space-between', 
    alignItems:'center', 
    boxShadow:'rgba(0, 0, 0, 0.4) 0px 30px 90px'
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
      <Container className={classes.recipeStyle}>
        <Box>
          <img src="breakfast1.jpg"  alt='' className={classes.recepiPicture}/>
        </Box>
        <Container>
          <Ingredients ingredients={ingredientsListBreakfast1}></Ingredients>
        </Container>
        <CustomizedDialogs></CustomizedDialogs>
      </Container>
      <Container className={classes.recipeStyle}>
          <Ingredients ingredients={ingredientsListBreakfast2}></Ingredients>
        <Box>
          <img src="breakfast2.jpg"  alt='' className={classes.recepiPicture}/>
        </Box>
      </Container>
      <Container className={classes.recipeStyle}>
        <Box>
          <img src="breakfast3.jpg"  alt='' className={classes.recepiPicture}/>
        </Box>
        <Container>
          <Ingredients ingredients={ingredientsListBreakfast3}></Ingredients>
        </Container>
      </Container>
   </div>
  );
}
