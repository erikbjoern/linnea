import React from 'react'
import { Container, Segment, Grid, GridColumn, Button, Input } from 'semantic-ui-react'

const testa = () => {
    let input = document.getElementById("input")
    if (input.value === (/VANDR{1|I}NG{5|S}BYX{0|O}R/) ) {
        alert("it worked!")
    } else {
        alert("it didn't work")
    }
}

const Inputbox = () => {
    return (
        
    )
}

export default Inputbox