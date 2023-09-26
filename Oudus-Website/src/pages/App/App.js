import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import styles from './App.module.scss';

import NavBar from '../../components/NavBar/NavBar';
import PlayMusic from '../../components/PlayMusic/PlayMusic';
import Logo from '../../components/Logo/Logo';

import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Music from '../../pages/Music/Music';
import Merch from '../../pages/Merch/Merch';
import Upcoming from '../../pages/Upcoming/Upcoming';

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route
                    path="/Contact"
                    element={
                        <Contact />
                    }
                />
                <Route
                    path="/Home"
                    element={
                        <Home />
                    }
                />
                <Route
                    path="/Music"
                    element={
                        <Music />
                    }
                />
                <Route
                    path="/Merch"
                    element={
                        <Merch />
                    }
                />
                <Route
                    path="/Upcoming"
                    element={
                        <Upcoming />
                    }
                />
                <Route path="/*" element={<Navigate to="/HomeScreen" />} />
            </Routes>
        </div>


    )
}