import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' flexGrow={1}>Weather Web App</Typography>
        <Box display={'flex'}>
          <Typography variant="subtitle1">Find new places</Typography>
          {/* <Autocomplete> */}
            <div className={classes.searchContainer}>
                <LocationSearchingIcon />
              <InputBase placeholder='Search'/>
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header