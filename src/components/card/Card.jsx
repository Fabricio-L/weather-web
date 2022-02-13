import React, { Fragment } from 'react'
import { Box, Typography } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import useWeather from '../../hooks/useWeather'
import useStyles from './styles'

const Card = () => {
  const classes = useStyles()
  const { current, forecast } = useWeather()

  console.log(current)
  console.log(forecast)

  return (
    <Fragment>
      <Box className={classes.root}>
        <Box>
          <Typography variant="h5">{current?.main.temp}ºC | {current?.weather[0].description}</Typography>
          <Typography variant="h5">{current?.name}, {current?.sys.country}</Typography>
          <WbSunnyIcon />
        </Box>
      </Box>
    </Fragment>
  )
}

export default Card