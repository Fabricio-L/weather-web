import React, { useState, useEffect, useContext } from 'react'
import { Box } from '@mui/material'
import { CityContext } from '../../context/CityContext'
import GoogleMapReact from 'google-map-react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import createMapOptions from './createMapOptions'
import useStyles from './styles'

const Map = () => {
  const classes = useStyles()
  const context = useContext(CityContext)
  const [coordinates, setCoordinates] = useState({
    lat: -37.339284,
    lng: -81.361661,
  })

  useEffect(() => {
    setCoordinates(context.city)
  }, [context.city])

  const handleCoordinates = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
  }

  return (
    <Box className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCoFGinNkNIiMGcIJk7A9c1X36qPTHL7Eo' }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={coordinates}
        defaultZoom={14}
        zoom={4}
        options={createMapOptions}
        onChange={handleCoordinates}
      >
        <div lat={coordinates.lat} lng={coordinates.lng}>
          <LocationOnOutlinedIcon />
        </div>
      </GoogleMapReact>
    </Box>
  )
}

export default Map
