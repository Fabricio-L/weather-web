import React from 'react'
import { Typography, Box } from '@mui/material'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()
  
  return (
      <Box display={'flex'} className={classes.root}>
        <Typography variant='h5' flexGrow={1}>Weather Web App</Typography>
      </Box>
  )
}

export default Footer