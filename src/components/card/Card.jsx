import React, { Fragment } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import useWeather from '../../hooks/useWeather'
import useStyles from './styles'
import GridItem from './GridItem'

const Card = () => {
  const classes = useStyles()
  const { current, forecast } = useWeather()

  console.log(current)
  console.log(forecast)

  return (
    <Fragment>
      <Box className={classes.root}>
        <Box className={classes.iconContainer}>
          <img
            src={`http://openweathermap.org/img/wn/${current?.weather[0].icon}@2x.png`}
            atl={current?.weather[0].main}
          />
        </Box>
        <Box className={classes.cardContainer}>
          <Typography variant="h3">
            {Math.round(current?.main.temp)}ºC
          </Typography>
          <Typography variant="h5">
            <span className={classes.description}>
              {current?.weather[0].description}
            </span>
          </Typography>
          <Typography variant="h5">
            {current?.name}, {current?.sys.country}
          </Typography>
        </Box>
        <Box className={classes.dailyContainer}>
          <Grid container spacing={2} display={'contents'}>
            {forecast?.daily.length > 0 ? (
              forecast.daily.slice(0, 5).map((day, index) => (
                <Grid item xs={2} index={index} display={'contents'}>
                  <GridItem
                    temp={day.temp.day}
                    weather={day.weather[0].description}
                    icon={day.weather[0].icon}
                    main={day.weather[0].main}
                  />
                </Grid>
              ))
            ) : (
              <Grid item xs={2}>
                Cargando...
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Fragment>
  )
}

export default Card
