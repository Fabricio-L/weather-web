import React, { Fragment } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import darkTheme from './themeConfig'
import Home from './views/Home'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}

export default App
