import React, { Fragment } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Grid } from '@mui/material'
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
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <div>Cosas</div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Home />
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}

export default App
