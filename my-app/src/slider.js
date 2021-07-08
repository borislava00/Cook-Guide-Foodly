import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import './examples.css';

import {Card, CardContent, CardMedia, Typography, Grid, Button, Checkbox, FormControlLabel, Radio, RadioGroup, FormLabel, Slider} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems;

    let items = [];
    
    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>
            </Grid>
        )

        items.push(media);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Items: [
            {
                Name: "Mushroom Pasta with Goat Cheese",
                Image: 'pasta.jpg'
            },
            {
                Name: "Learus Vacuum Cleaner",
                Image: 'dinner.jpeg'
            },
            {
                Name: "Chipotle Chicken Taquitos",
                Image: 'chicken.jpeg'
            }
        ]
    },
    {
        Items: [
            {
                Name: "Mushroom Pasta with Goat Cheese",
                Image: 'chicken.jpeg'
            },
            {
                Name: "Mushroom Pasta with Goat Cheese",
                Image: 'dinner.jpeg'
            },
            {
                Name: "Learus Vacuum Cleaner",
                Image: 'pasta.jpg'
            }
        ]
    },
    {
        Items: [
            {
                Name: "Lemon Chicken With Asparagus",
                Image: 'dinner.jpeg'
            },
            {
                Name: "Mushroom Pasta with Goat Cheese",
                Image: 'dinner.jpeg'
            },
            {
                Name: "Breaded Lemon Chicken",
                Image: 'dinner.jpeg'
            }
        ]
    }
]

class BannerExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            animation: "slide",
            indicators: true,
            timeout: 800,
            navButtonsAlwaysVisible: true,
        }

        autoBind(this);
    }

    render() {
        return (
            <div style={{ marginTop: "0px", color: "#494949"}}>
                <Carousel
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    next={(now, previous) => console.log(`Next${now}. Previously${previous}`)}
                    prev={(now, previous) => console.log(`Prev${now}. Previously${previous}`)}
                    onChange={(now, previous) => console.log(`OnChange${now}. Previously${previous}`)}>
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index}  />
                        })
                    }
                </Carousel>
            </div>

        )
    }
}

export default BannerExample;
