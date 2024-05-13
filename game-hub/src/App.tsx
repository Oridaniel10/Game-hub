import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"', // most devices
        lg: '"nav nav" "aside main"', // large devices more the 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        {/* Showing the Aside grid only on large devices more than 1024px*/}
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}
export default App;
