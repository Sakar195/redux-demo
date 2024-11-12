import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 4,
      retry: false,
      //staleTime
      refetchOnWindowFocus: false,
      // retryDelay: 1000,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>
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
