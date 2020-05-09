import React from 'react'
import { Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import car from '../images/car.png'

const WelcomePage = () => {
  return (
    <Container>
      <Link to="/main">
        <Image src={car} />
      </Link>
    </Container>
  )
}

export default WelcomePage;
