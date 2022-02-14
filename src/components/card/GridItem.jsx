import React, { Fragment } from 'react'
import { Typography } from '@mui/material'
import useStyles from './styles'

const GridItem = ({temp, weather}) => {
  const classes = useStyles()

  return (
    <Fragment>
      <Typography variant="h6">{Math.round(temp)}ºC</Typography>
      <Typography variant="h7"><span className={classes.description}>{weather}</span></Typography>
    </Fragment>
  )
}

export default GridItem