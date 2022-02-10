import Home from './views/Home'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  )
}

export default App
