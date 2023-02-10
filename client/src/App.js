import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";

import ApplicationBar from "./components/appBar/ApplicationBar";
import MainRouter from "./components/router/MainRouter";
import { refreshAuth } from "./actions/authActions";
const App = () => {

  refreshAuth();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <ApplicationBar />
          <MainRouter />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
