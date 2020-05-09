import React, { Component } from 'react'
import { Container, Segment, Button, Table, Header} from 'semantic-ui-react'

class MainPage extends Component {
  state = {
    answer: "da"
  }

  onClickHandler = () => {
    let regex = new RegExp(/vandri|1ngs|5byx0|or/)
    let answer = document.getElementById("input").value.toLowerCase()
    if (regex.test(answer)) {
      console.log(answer)
    } else {
      console.log(`nej, inte ${answer}`)
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
        <Container align="center" style={{marginTop: "50px"}}>
          <Segment style={{marginTop: "40px", width: "30%"}}>
            <Header as="h5">Sätt ihop dina sudokun såhär, och skriv in svaret!</Header>
          </Segment>
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
              <Table.Cell style={{backgroundColor: "#dee1e3", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3"}}></Table.Cell>
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
              <Table.Cell style={{backgroundColor: "#dee1e3"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3"}}>5</Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3", borderLeft: "1px solid #bcbfc1"}}></Table.Cell>
              <Table.Cell style={{backgroundColor: "#dee1e3"}}></Table.Cell>
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
          <Segment inverted style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#dee1e3", width: "70%", marginTop: "40px"}}>
            <input fluid id="input" onKeyDown={this.enter} className="input" type="text"/>
            <Button basic onClick={this.onClickHandler}>Testa!</Button>            
          </Segment>
        </Container>
      </>
    )
  }
}

export default MainPage;
