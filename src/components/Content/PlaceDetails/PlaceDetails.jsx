import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Chip, Grid} from '@material-ui/core';

import useStyles from './styles';


const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    
    return (
        <div>
        <Grid container spacing ={3}>
            <Grid item xs ={4}>
        <Card elevation={6} sx={{maxWidth: 200}} >
            <CardMedia
                style={{ height: 200}}
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
            </Grid>
            <Grid item xs ={4}>
        <Card elevation={6} sx={{maxWidth: 200}} >
            <CardMedia
                style={{ height: 200}}
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
            </Grid>
            <Grid item xs ={4}>
        <Card elevation={6} sx={{maxWidth: 200}} >
            <CardMedia
                style={{ height: 200}}
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
            </Grid>
        </Grid>

        </div>
    );
}

export default PlaceDetails;