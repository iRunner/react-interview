import  { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";


const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  body {
    height: 100%;
    width: 100%;
    margin: 0px;
  }
  #app {
    height: 100%;
    width: 100%;
  }
`;





function App() {
  const theme = {};

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ThemeProvider theme={theme}>
        
           
      </ThemeProvider>
    </div>
  );
}

export default App;
