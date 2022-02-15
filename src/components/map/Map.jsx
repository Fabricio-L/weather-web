import React, { useState } from 'react'
import { Box } from '@mui/material'
import GoogleMapReact from 'google-map-react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import createMapOptions from './createMapOptions'
import useStyles from './styles'

const Map = () => {
  const classes = useStyles()
  const [coordinates, setCoordinates] = useState({
    lat: -37.339284,
    lng: -81.361661,
  })
  const [indexPlace, setIndexPlace] = useState(0)

  const listPlaces = [
    {
      lat: '-27.4806',
      lng: '-58.8341',
    },
    {
      lat: '-34.6132',
      lng: '-58.3772',
    },
    {
      lat: '-34.8335',
      lng: '-56.1674',
    },
    {
      lat: '-23.547',
      lng: '-46.6361',
    },
    {
      lat: '-12.0432',
      lng: '-77.0282',
    },
  ]

  const handleCoordinates = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
  }

  const handleSelectPlace = (e) => {
    console.log(e)
    setIndexPlace(e)
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
        onChildClick={handleSelectPlace}
      >
        {listPlaces.map((place, index) => (
          <div lat={place.lat} lng={place.lng} key={index}>
            <LocationOnOutlinedIcon />
          </div>
        ))}
      </GoogleMapReact>
    </Box>
  )
}

export default Map
