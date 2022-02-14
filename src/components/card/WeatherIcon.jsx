import React from 'react'
import { Box } from '@mui/material'
import useStyles from './styles'
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded'
import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded'
import StormRoundedIcon from '@mui/icons-material/StormRounded'
import AirRoundedIcon from '@mui/icons-material/AirRounded'
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded'
import WaterRoundedIcon from '@mui/icons-material/WaterRounded'
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded'

const WeatherIcon = () => {
  const classes = useStyles()

  return (
    <Box className={classes.iconContainer}>
      <WbSunnyRoundedIcon sx={{ fontSize: 80 }} />
    </Box>
  )
}

export default WeatherIcon
