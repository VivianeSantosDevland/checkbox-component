
//import './App.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import styled from "stayled-components";

import styled from "styled-components"
import { Button } from "./lib";
import { Checkbox } from "./lib";
import { Checkboxgroup } from "./lib";
const Container = styled.div`

height: 100vh;
width: 100vw;
background-color:#223355;
`;
function App() {
  return (
    <Container>
      <Button caption="Clique-me"/>  
      <Checkboxgroup>
        <Checkbox id="a" name="Tech recruter" label="Tech recruter"></Checkbox>
        <Checkbox id="b" name="Estudante" label="Estudante"></Checkbox>
        <Checkbox id="c" name="Professor" label="Professor"></Checkbox>
        <Checkbox id="d" name="Dev backend" label="Dev backend"></Checkbox>
        <Checkbox id="e" name="Dev frontend" label="Dev frontend"></Checkbox>
      </Checkboxgroup>
    </Container>
  )
}

export default App
