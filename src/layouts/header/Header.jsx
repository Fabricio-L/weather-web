import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <WbSunnyRoundedIcon />
        <Typography variant="h5" flexGrow={1}>
          Weather
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
