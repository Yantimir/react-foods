import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CategoryPage } from "./pages/CategoryPage";
import { RecipePage } from "./pages/RecipePage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Router basename="/react-foods">
          <Header />
          <Container maxWidth="xl">
            <main className="content">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contacts" component={ContactPage} />
                <Route path="/category/:name" component={CategoryPage} />
                <Route path="/meal/:id" component={RecipePage} />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </main>
          </Container>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
