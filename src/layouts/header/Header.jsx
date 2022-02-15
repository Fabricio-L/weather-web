import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <WbSunnyRoundedIcon />
        <Typography variant="h5" flexGrow={1}>
          Weather
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
