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
import TendersPage from "./pages/TendersPage/TendersPage";
import ActiveTenderPage from "./pages/TendersPage/ActiveTenderPage";
import CreateTenderPage from "./pages/CreateTender/CreateTenderPage";
import CreateBidPage from "./pages/CreateBidPage/CreateBidPage";

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

                <Route path={'tenders'}>
                    <Route path={''} element={ <TendersPage/> }/>
                    <Route path={':id'} element={ <ActiveTenderPage/> }/>

                </Route>
                <Route path={'/creating'} element={ <CreateTenderPage/> }/>
            </Route>

            <Route path={'/error'}>
                <Route path={'unauthorized'} element={<Unathorized/>}/>
            </Route>
            <Route path={'/createbid'} element={ <CreateBidPage/> }/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
