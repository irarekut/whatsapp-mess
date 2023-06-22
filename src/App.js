import AppRoutes from "./routes/routes";
import "./App.css";
import { React } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
}

export default App;
