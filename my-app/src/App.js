
import React, {useState} from 'react';
import './App.css';
import './scrollBox.css';
import { ingredientsListBreakfast1, ingredientsListBreakfast2, ingredientsListBreakfast3 } from './ingredientsList';
import { AppBar, Box, Typography, Container,createTheme, ThemeProvider,CssBaseline} from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import Slider from './slider.js'
import { Ingredients } from './ingredients';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export function App() {
  const initialThemeState = localStorage.getItem('themeMode') ?  (localStorage.getItem('themeMode') === 'true' ? true : false) : false;
  const [ prefersDarkMode, setState] = useState(initialThemeState);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>  
        <div class="App">
          <AppBar position="static" class="appBar">
            <Box>
              <img src="logo.png" alt='' class="logoImg"/>
            </Box>
            <Typography variant='h3' style={{fontFamily: 'FreeMono'}}>Cook Book</Typography>
            <IconButton style={{position: 'absolute', right: '50px'}} onClick={() => {
              localStorage.setItem('themeMode', !prefersDarkMode);
              setState(!prefersDarkMode);
            }}>
              <Brightness4Icon/>
            </IconButton>
          </AppBar>
          <Slider/>
          <Container class="recipeStyle" id='poachedEggs'>
            <Box>
              <img src="breakfast1.jpg"  alt='' class="recepiPicture"/>
            </Box>
            <Container>
              <Ingredients ingredients={ingredientsListBreakfast1}></Ingredients>
            </Container>
            <Box class="box" style={{width:'1100px'}}>
              <Typography  class="instructions" >STEP 1</Typography>
              <Typography>Fill a large saucepan with water, add the vinegar and bring to a hard boil over a high heat. Once boiling, reduce the heat so the water is simmering, then use a spoon to swirl the water into a whirlpool. Crack in both eggs and cook for 2 1/2 mins.</Typography>
              <Typography class="instructions" >STEP 2</Typography>
              <Typography>Meanwhile, in a small bowl, mash the avocado, feta, chilli flakes and lemon juice, and season well with black pepper. Toast the bread.</Typography>
              <Typography class="instructions">STEP 3</Typography>
              <Typography>Pile the avocado and feta on the toast, then put a poached egg on top of each.</Typography>
            </Box>
          </Container>
          <Container class="recipeStyle" id='pancakes'>
            <Box class="box" style={{width:'500px'}}>
                <Typography  class="instructions" >STEP 1</Typography>
                <Typography>First separate the eggs, putting the whites into one bowl and the yolks into another.</Typography>
                <Typography class="instructions" >STEP 2</Typography>
                <Typography>Add the flour, baking powder and milk to the yolks and mix to a smooth thick batter.</Typography>
                <Typography class="instructions">STEP 3</Typography>
                <Typography>Whisk the whites with 1 pinch of sea salt until they form stiff peaks, then fold into the batter – it is now ready to use.</Typography>
                <Typography  class="instructions" >STEP 4</Typography>
                <Typography>Heat a non-stick pan over a medium heat, pour some of the batter into the pan and cook for a couple of minutes, or until it starts to look golden and firm.</Typography>
                <Typography class="instructions" >STEP 5</Typography>
                <Typography>At this point sprinkle your chosen flavouring (see below) onto the uncooked side before loosening with a spatula and flipping the pancake over. Continue frying until both sides are golden.</Typography>
                <Typography class="instructions">STEP 6</Typography>
                <Typography>You can make these pancakes large or small, depending on what you prefer. Serve them with a drizzle of maple syrup, or even with some butter or crème fraîche. If you choose to sprinkle with a flavouring, try one of these... fresh corn from the cob, crispy bacon or pancetta, blueberries, banana, stewed apple, grated chocolate – anything else you can imagine...</Typography>
              </Box>
              <Ingredients ingredients={ingredientsListBreakfast2}></Ingredients>
            <Box>
              <img src="breakfast2.jpg"  alt='' class="recepiPicture"/>
            </Box>
          </Container>
          <Container class="recipeStyle" id='oatmeal'>
            <Box>
              <img src="breakfast3.jpg"  alt='' class="recepiPicture"/>
            </Box>
            <Container>
              <Ingredients ingredients={ingredientsListBreakfast3}></Ingredients>
            </Container>
            <Box class="box" style={{width:'1100px'}}>
              <Typography class="instructions" >STEP 1</Typography>
              <Typography>Place milk and salt in a large saucepan.</Typography>
              <Typography class="instructions" >STEP 2</Typography>
              <Typography>Bring just to a boil. Stir in oats.</Typography>
              <Typography class="instructions">STEP 3</Typography>
              <Typography>Cook until thickened, 1-2 minutes, stirring occasionally. </Typography>
              <Typography class="instructions">STEP 4</Typography>
              <Typography>Remove from heat and stir in remaining ingredients.</Typography>
            </Box>
          </Container>
      </div>
    </ThemeProvider>
  );
}
