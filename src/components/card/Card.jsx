import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import useStyles from './styles'

const Card = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Box className={classes.root}>
        Data card
      </Box>
    </Fragment>
  )
}

export default Card