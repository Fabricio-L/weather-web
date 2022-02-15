import { Fragment } from 'react'
import Card from '../../components/card/Card'
import Map from '../../components/map/Map'
import Select from '../../components/select/Select'

const Home = () => {
  return (
    <Fragment>
      <Map />
      <Select />
      <Card />
    </Fragment>
  )
}

export default Home
