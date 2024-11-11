import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

// ant design table
// column action
// your logic add edit delete using redux
//
// use layout

// use react router v6 in sidebar or navbar
// lazy loading also
// use ant design for sidebar or navbar
// and in one of the route put the CRUD component
// use redux for state management

/// use history,

// v6 useNavigation.
