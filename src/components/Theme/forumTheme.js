import styled, { css } from 'styled-components'

const SubmitButton = styled.button`
  background: lightblue;
  border: 4px solid black;
  color: black;
`

const SuperSubmitButton = styled(SubmitButton)`
  background: lightgreen;

`

export {SubmitButton, SuperSubmitButton};