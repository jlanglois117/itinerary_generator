import React, { useState } from 'react';
import { FormControl, Typography, InputLabel, Select, MenuItem, Grid} from '@material-ui/core';
import './Content.css'

const Generator = () => {

    const [days, setDays] = useState('');

    const handleDaysChange = (event) => {
      setDays(event.target.value);
    };

    // useEffect(() => {
    //     if (days) {
    //       generateTrips()
    //         .then((trips) => setTrips(trips))
    //         .catch((error) => console.log(error));
    //     }
    //   }, [days]);
    

  return (
    <div class = "body">
        <div>
        <Typography variant = "h4">
                Let us plan your trip for you!
        </Typography>
        
      <FormControl>
        <InputLabel id="days-label">Days</InputLabel>
        <Select
          labelId="days-label"
          id="days"
          value={days}
          onChange={handleDaysChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
        </Select>
      </FormControl>
    </div>
    </div>
  );
};

export default Generator;