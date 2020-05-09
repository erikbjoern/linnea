import React, { Component } from 'react'
import { Container, Segment, Button, Table, Header, Transition, Image, Message} from 'semantic-ui-react'
import logo from '../images/logo.png'
import mage from '../images/mage.jpeg'
import nin from '../images/nin.png'

class MainPage extends Component {
  state = {
    answer: "",
    visible: true,
    visible2: false,
    visible3: false,
    visible4: false,
    visible5: true
  }

  onClickHandler = () => {
    let regex = new RegExp(/vandri|1ngs|5byx0|or/)
    let answer = document.getElementById("input").value.toLowerCase()
    if (regex.test(answer)) {
      this.setState({visible: false})
      setTimeout(() => {this.setState({visible2: true})}, 2000)
      setTimeout(() => {this.setState({visible4: true})}, 4000)
      setTimeout(() => {this.setState({visible3: true})}, 7000)
      setTimeout(() => {alert("Grattis Linnéa! Jag älskar dig <3 <3 <3 Hoppas dagen blir bra (jag har inte köpt spelet, jag kunde inte logga in, men jag kommer swisha dig!) //din hacker-hubby")}, 10000)
    } else {
      this.setState((prevState) => ({ visible5: !prevState.visible5 }))
    }
  }

  enter = (e) => {
    if(e.key === 'Enter') {
      this.onClickHandler()   
    }
}

  render() {

    return (
      <>
        <Transition visible={this.state.visible} animation="fly right" duration={1000}>
          <Container style={{position: "absolute", top: "10px", width: "100%"}}>
            <Container align="center" style={{marginTop: "50px"}}>
              <Message style={{marginTop: "40px", width: "30%"}}><p>Sätt ihop dina sudokun såhär, och skriv in svaret!</p></Message>
            </Container>
            <Container className="main" style={{display: "flex", justifyContent: "center"}}>

              <Table celled collapsing size="large">
                <Table.Row>
                  <Table.Cell>3</Table.Cell>
                  <Table.Cell>D</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell>V</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>4</Table.Cell>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}>1</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>N</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell>4</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>A</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>R</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>4</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>V</Table.Cell>
                  <Table.Cell>R</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>2</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>3</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>V</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1", borderLeft: "1px solid #bcbfc1"}}>R</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>N</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>D</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>4</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>D</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>R</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}>1</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>V</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}>3</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>V</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table>

              <Table celled collapsing size="large">
                <Table.Row>
                  <Table.Cell>G</Table.Cell>
                  <Table.Cell>X</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell>0</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell>6</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>N</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell>6</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}>G</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>6</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}>X</Table.Cell>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell>0</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>Y</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1", borderLeft: "1px solid #bcbfc1"}}>X</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>G</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}>5</Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{backgroundColor: "#c7d7d9"}}></Table.Cell>
                  <Table.Cell>6</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>X</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>B</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}>0</Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell style={{borderTop: "1px solid #bcbfc1"}}></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>B</Table.Cell>
                  <Table.Cell>X</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>N</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
                  <Table.Cell>G</Table.Cell>
                  <Table.Cell>0</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}>Y</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>6</Table.Cell>
                  <Table.Cell style={{borderLeft: "1px solid #bcbfc1"}}>5</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>N</Table.Cell>
                </Table.Row>
              </Table>

            </Container>
            <Container align="center">
              <Transition animation="shake" duration={1000} visible={this.state.visible5}>
                <Segment inverted style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#a9c2c4", width: "50%", marginTop: "40px"}}>
                  <input fluid id="input" onKeyDown={this.enter} className="input" type="text"/>
                  <Button basic onClick={this.onClickHandler}>Testa!</Button>            
                </Segment>
              </Transition>
            </Container>
          </Container>
        </Transition>
        <Container align="center">
          <Transition visible={this.state.visible2} animation="tada" duration={1000}>
            <Segment style={{width: "50%", height: "80%", marginTop: "2%", padding: "30px", backgroundColor: "#a9c2c4"}}>
              <Image size="medium" src={logo}/>
              <Header as="h1" style={{color: "#394242", fontFamily: "serif"}}>Presentkort på 1000kr till vandringsbyxor!</Header>
            </Segment>
          </Transition>
          <Transition visible={this.state.visible4} duration={3000}>
            <Header as="h3">Och ...</Header>
          </Transition>
          <Transition visible={this.state.visible3} animation="fly left" duration={5000}>  
            <Segment style={{width: "50%", marginTop: "2%", padding: "20px, 20px, 20px, 0", backgroundColor: "#10383b"}}>
              <Image size="large" src={mage}/>
              <Container style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <Image size="small" src={nin}/>
              </Container>
            </Segment>
          </Transition>
        </Container>
      </>
    )
  }
}

export default MainPage;
