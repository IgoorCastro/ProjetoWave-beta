import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { DataProvider } from '../context/DataContext';
import Home from '../pages/Home';
import Autentic from '../pages/Autentic';
import UserProfile from '../pages/UserProfile';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<UserProfile />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp
