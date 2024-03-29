import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CategoryPage } from "./pages/CategoryPage";
import { RecipePage } from "./pages/RecipePage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { Switch, Route } from "react-router-dom";

import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#045256",
    },
    secondary: {
      main: "#9AB8BA",
    },
  },
  typography: {
    fontFamily: [
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="xl">
          <main className="content">
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path="/about" component={AboutPage} />
              <Route path="/contacts" component={ContactPage} />
              <Route path="/category/:name" component={CategoryPage} />
              <Route path="/meal/:id" component={RecipePage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </main>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
