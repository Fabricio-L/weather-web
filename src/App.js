import React, { Fragment } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import darkTheme from './themeConfig'
import CityProvider from './context/CityContext'
import Home from './views/Home'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'

const App = () => {
  return (
    <Fragment>
      <CityProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box height={'100vh'}>
            <Header />
            <Home />
            <Footer />
          </Box>
        </ThemeProvider>
      </CityProvider>
    </Fragment>
  )
}

export default App
