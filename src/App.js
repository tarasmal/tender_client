import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";
import ProfilePage from "./pages/Profile/ProfilePage";
import InfoPage from "./pages/Profile/InfoPage";
import ActivityPage from "./pages/Profile/ActivityPage";
import Unathorized from "./pages/StatusCodes/Unathorized";
import ChangePasswordPage from "./pages/Profile/ChangePasswordPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/auth'} element={ <AuthPage/> }>
                <Route path={'registration'} element={ <Registration/> }/>
                <Route path={'login'} element={ <Login/> }/>
            </Route>
            <Route path={'/'} element={<HomePage/>}>
                <Route path={'profile'} element={ <ProfilePage/> }>
                    <Route path={'info'} element={ <InfoPage /> }/>
                    <Route path={'activity'} element={ <ActivityPage/> } />
                    <Route path={'changepass'} element={ <ChangePasswordPage/> } />
                </Route>
            </Route>

            <Route path={'/error'}>
                <Route path={'unauthorized'} element={<Unathorized/>}/>
            </Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
