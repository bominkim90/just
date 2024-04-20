import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import PopupComponent from './wrap/PopupComponent';
import { useSelector } from 'react-redux';
import './scss/WrapComponent.scss';
import SignUpComponent from './wrap/sub/SignUpComponent';
import { HashRouter, Routes, Route } from 'react-router-dom';


export default function WrapComponent(){
    const show = useSelector((state)=>state.popupSlice.show);

    return (
        <div id="wrap">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HeaderComponent />}>
                        <Route index element={<MainComponent />} />
                        <Route path="/index" element={<MainComponent />} />
                        <Route path="/signup" element={<SignUpComponent />} />
                    </Route>
                </Routes>

                <FooterComponent />
                { show && <PopupComponent /> }
            </HashRouter>
        </div>
    );
};