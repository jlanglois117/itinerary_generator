import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350}}
                image={place.photo ? place.photo.images.large.url : 'https://static0.thethingsimages.com/wordpress/wp-content/uploads/2022/02/9EB441A0-09D1-4872-BA59-D80510AD83BB.jpeg?q=50&fit=contain&w=1140&h=&dpr=1.5'}
                place={place.name}>
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5"> 
                    {place.name}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterbottom variant="subtitle1">{place.price_level}</Typography>
                    <Typography variant="subtitle1">Rating</Typography>
                    <Typography gutterbottom variant="subtitle1">{place.rating}</Typography>
                </Box>
                {place?.cuisine?.map(( { name } ) =>
                    <Chip key={name} size="small" label={name} className={classes.chip}></Chip>
                )}
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;