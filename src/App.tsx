import { Suspense } from "react";
import list from "./RouteList";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {list?.map((item, i) => (
            <Route path={item?.path} element={<item.component />} key={i} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
