import styled, { } from 'styled-components'

const SubmitButton = styled.button`
  background: lightblue;
  border: 4px solid black;
  color: black;
`

const SuperSubmitButton = styled(SubmitButton)`
  background: lightgreen;

`

const Paragraph = styled.p`
  color: darkgrey;

`

const SuperDiv = styled.div`
  color: black;
  


`

const SuperDuperDiv = styled(SuperDiv)`
  font-weight: bold;
`

export {SubmitButton, SuperSubmitButton, Paragraph, SuperDiv, SuperDuperDiv};