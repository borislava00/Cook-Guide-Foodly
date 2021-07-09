import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import './slider.css';

import {Card, CardMedia, Typography, Grid,} from '@material-ui/core';

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
                Name: "Poached eggs on avocado & feta toast",
                Image: 'breakfast1.jpg'
            },
            {
                Name: "American pancakes",
                Image: 'breakfast2.jpg'
            },
            {
                Name: "Peanut butter banana oatmeal",
                Image: 'breakfast3.jpg'
            }
        ]
    },
    {
        Items: [
            {
                Name: "Greek salas",
                Image: 'lunch1.jpg'
            },
            {
                Name: "Chickpea falafel",
                Image: 'lunch2.jpg'
            },
            {
                Name: "Creamy lemon garlic chicken with asparagus",
                Image: 'lunch3.jpg'
            }
        ]
    },
    {
        Items: [
            {
                Name: "Creamy lemon zucchini pasta",
                Image: 'dinner1.jpg'
            },
            {
                Name: "Salmon with potatoes and asparagus",
                Image: 'dinner2.jpg'
            },
            {
                Name: "Citrus & chile glazed pork chops",
                Image: 'dinner3.jpg'
            }
        ]
    }
]

class Slider extends React.Component {
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
            <div style={{ marginTop: "10px", color: "#494949"}}>
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
                            return <Banner item={item} key={index}/>
                        })
                    }
                </Carousel>
            </div>

        )
    }
}

export default Slider;
