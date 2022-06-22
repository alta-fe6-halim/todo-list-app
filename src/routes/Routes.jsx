// import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Detail from '../pages/Detail.jsx';
import Homepage from '../pages/Homepage.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/homepage" />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App