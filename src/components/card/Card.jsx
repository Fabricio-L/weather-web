import React, { Fragment } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import InvertColorsRoundedIcon from '@mui/icons-material/InvertColorsRounded'
import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import useWeather from '../../hooks/useWeather'
import useStyles from './styles'
import GridItem from './GridItem'

const Card = () => {
  const classes = useStyles()
  const { current, forecast } = useWeather()
  const date = new Date()

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
          <Box display={'flex'} alignItems={'center'}>
            <Typography variant="h6" className={classes.description}>
              {current?.weather[0].description} |
            </Typography>
            <CloudRoundedIcon />
            <Typography className={classes.description}>
              {' '}
              {current?.clouds.all}% |
            </Typography>
            <InvertColorsRoundedIcon />
            <Typography className={classes.description}>
              {' '}
              {current?.main.humidity}%
            </Typography>
          </Box>
          <Typography variant="h7">
            {current?.name}, {current?.sys.country} |{' '}
            {date.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}
          </Typography>
        </Box>
        <Box className={classes.dailyContainer}>
          <Grid container spacing={2} display={'contents'}>
            {forecast?.daily.length > 0 ? (
              forecast.daily.slice(0, 5).map((day, index) => (
                <Grid item xs={2} key={index} display={'contents'}>
                  <GridItem
                    currentDate={date}
                    day={index}
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
