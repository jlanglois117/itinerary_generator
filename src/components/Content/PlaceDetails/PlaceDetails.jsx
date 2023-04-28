import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  const [showChips, setShowChips] = useState(false);

  const handleShowChips = () => {
    setShowChips(!showChips);
  };

  return (
    <Card elevation={6} style={{ maxWidth: 500, maxHeight: 500 }}>
        <Link to={place.website} target="_blank" rel="noopener noreferrer">
        <CardMedia
          style={{ height: 120, marginBottom: '-40px' }}
          image={
            place.photo
              ? place.photo.images.large.url
              : 'https://static0.thethingsimages.com/wordpress/wp-content/uploads/2022/02/9EB441A0-09D1-4872-BA59-D80510AD83BB.jpeg?q=50&fit=contain&w=1140&h=&dpr=1.5'
          }
          place={place.name}
        />
      </Link>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6">{place.name}</Typography>
          {place.write_review && (
            <Typography
              color="primary"
              variant="body2"
              component={Link}
              to={place.write_review}
              target="_blank"
              rel="noopener noreferrer"
              align="center"
            >
              Write Review
            </Typography>
          )}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          <Typography variant="subtitle2">Price</Typography>
          <Typography variant="subtitle2">{place.price_level}</Typography>
          <Typography variant="subtitle2">Rating</Typography>
          <Rating value={place.rating} readOnly />
        </Box>
        {place?.cuisine?.length > 0 && (
          <Box mt={1} display="flex" justifyContent="center">
            <Button color="primary" variant="outlined" onClick={handleShowChips} style={{color: "forestgreen", borderColor: "forestgreen"}}>
              {showChips ? 'Hide' : 'Show'} Cuisine
            </Button>
          </Box>
        )}
        {showChips &&
          place?.cuisine?.map(({ name }) => <Chip key={name} size="small" label={name} className={classes.chip}></Chip>)}
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;

