import { Typography, Box } from '@mui/material'
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded'
import useStyles from './styles'

const GridItem = ({ temp, weather, icon, main }) => {
  const classes = useStyles()

  return (
    <Box className={classes.dailyItem}>
      <Box className={classes.dailyPart}>
        <ThermostatRoundedIcon />
        <Typography variant="h6">{Math.round(temp)}ºC</Typography>
      </Box>
      <Box className={classes.dailyPart}>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          atl={main}
          width={'40px'}
        />
        <Typography variant="h7">
          <span className={classes.description}>{weather}</span>
        </Typography>
      </Box>
    </Box>
  )
}

export default GridItem
