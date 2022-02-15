import React, { Fragment, useState } from 'react'
import { Box, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import useStyles from './styles'

const Card = () => {
  const classes = useStyles()
  const [city, setCity] = useState('')

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <Fragment>
      <Box className={classes.root}>
        <Box className={classes.cardContainer}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={'Corrientes,AR'}>Corrientes</MenuItem>
              <MenuItem value={'Buenos Aires,AR'}>Buenos Aires</MenuItem>
              <MenuItem value={'Montevideo,UY'}>Montevideo</MenuItem>
              <MenuItem value={'São Paulo,BR'}>São Paulo</MenuItem>
              <MenuItem value={'Lima,PE'}>Lima</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Fragment>
  )
}

export default Card
