import React from 'react'
import { Typography, Box } from '@mui/material'
import github from '../../assets/icons/github.svg'
import mui from '../../assets/icons/material-ui.svg'
import weather from '../../assets/icons/open-weather.png'
import reactjs from '../../assets/icons/reactjs.svg'
import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <Box display={'flex'} className={classes.root}>
      <Box flexGrow={1} className={classes.root} style={{ marginLeft: '10px' }}>
        <Typography variant="h7">Technologies</Typography>
        <img src={reactjs} className={classes.imgFooter} alt="React JS" />
        <img src={mui} className={classes.imgFooter} alt="Material UI" />
        <img
          src={weather}
          style={{ width: '90px', height: 'fit-content', margin: '10px' }}
          alt="Open Weather"
        />
      </Box>

      <Typography variant="h7">Repository</Typography>
      <a
        href="https://github.com/Fabricio-L/weather-web/tree/master"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={github}
          className={classes.imgFooter}
          style={{ marginRight: '10px' }}
          alt="Github"
        />
      </a>
    </Box>
  )
}

export default Footer
