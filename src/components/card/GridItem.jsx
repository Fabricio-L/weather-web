import { Typography, Box } from '@mui/material'
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded'
import useStyles from './styles'

const GridItem = ({ temp, weather, icon, main, currentDate, day }) => {
  const classes = useStyles()
  const date = new Date(
    `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${
      currentDate.getDate() + (day + 1)
    }`
  )
  return (
    <Box className={classes.dailyItem}>
      <Box className={classes.dailyPart}>
        <ThermostatRoundedIcon />
        <Typography variant="h6">{Math.round(temp)}ºC</Typography>
        <Typography variant="h7" marginLeft={'10px'}>
          {date.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          })}
        </Typography>
      </Box>
      <Box className={classes.dailyPart}>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={main}
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
