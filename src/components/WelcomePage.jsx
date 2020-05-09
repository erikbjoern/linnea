import React, { Component } from 'react'
import { Container, Image, Header, Transition } from 'semantic-ui-react';
import car from '../images/car.png'
import { Link } from 'react-router-dom'

class WelcomePage extends Component {
  state = {
    visible0: true,
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false
  }

  componentDidMount() {
    setTimeout(() => { this.setState({visible1: true})}, 2000)
    setTimeout(() => { this.setState({visible2: true})}, 4000)
    setTimeout(() => { this.setState({visible3: true})}, 6000)
  }

  hide = () => {
    this.setState({visible0: false, visible1: false, visible2: false, visible3: false})
    setTimeout(() => { this.setState({visible4: true})})
  }

  render () {

    return (
        <Container onClick={this.hide}>
          <Transition visible={this.state.visible0} animation="fly right" duration={1000}>
            <Image src={car} />
          </Transition>
          <Transition visible={this.state.visible1}  duration={1000}>
            <Header as="h2" style={{position: "absolute", top: "250px", left: "400px", color: "#8988ae"}}>Tjena</Header>
          </Transition>
          <Transition visible={this.state.visible2} animation="fly left" duration={1000}>
            <Header as="h2" style={{position: "absolute", top: "300px", left: "400px", color: "#8988ae"}}>Du har kommit rätt.</Header>
          </Transition>
          <Transition visible={this.state.visible3} animation="fly right" duration={1000}>
            <Header as="h2" style={{position: "absolute", top: "350px", left: "400px", color: "#8988ae"}}>Klicka!</Header>
          </Transition>
        </Container>
    )
  }
}

export default WelcomePage;
