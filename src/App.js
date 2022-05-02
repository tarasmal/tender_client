import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import Registration from "./pages/Auth/Registration";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/auth'} element={<AuthPage/>}>
              <Route path={'registration'} element={<Registration/>}/>
              <Route path={'login'} element={<h1>log</h1>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
