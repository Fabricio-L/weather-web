import React, { Fragment, useContext, useState } from 'react'
import { Box, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { CityContext } from '../../context/CityContext'
import useStyles from './styles'

const Card = () => {
  const classes = useStyles()
  const context = useContext(CityContext)
  const [city, setCity] = useState('Corrientes,AR')

  const cities = [
    {
      name: 'Corrientes,AR',
      lat: '-27.4806',
      lng: '-58.8341',
    },
    {
      name: 'Buenos Aires,AR',
      lat: '-34.6132',
      lng: '-58.3772',
    },
    {
      name: 'Montevideo,UY',
      lat: '-34.8335',
      lng: '-56.1674',
    },
    {
      name: 'São Paulo,BR',
      lat: '-23.547',
      lng: '-46.6361',
    },
    {
      name: 'Lima,PE',
      lat: '-12.0432',
      lng: '-77.0282',
    },
  ]

  const handleChange = (event) => {
    setCity(event.target.value)
    context.setCity(cities.find((x) => x.name === event.target.value))
  }

  return (
    <Fragment>
      <Box className={classes.root}>
        <Box className={classes.cardContainer}>
          <FormControl fullWidth>
            <InputLabel id="Label">City</InputLabel>
            <Select
              labelId="City-Select"
              id="Select"
              value={city}
              label="City"
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
