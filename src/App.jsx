import React, { Component } from 'react';
import {Transition, Container} from 'semantic-ui-react'
import './style/App.css'
import WelcomePage from './components/WelcomePage'
import MainPage from './components/MainPage'


class App extends Component {
  state = { visible: false }

  hide = () => {
    setTimeout(() => { this.setState({ visible: true }) }, 1000)
  }



  render () {

    return (
      <>
        <Transition animation="fly up" visible={this.state.visible} duration={1000}>
          <MainPage />
        </Transition>
        <Container onClick={this.hide}>
          <WelcomePage/>
        </Container>
      </>
    );
  }
}

export default App;
