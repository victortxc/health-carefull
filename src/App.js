import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {NormalizeStyles} from './shared/NormalizeStyles';
import {Home} from './screens/Home';
import {MedicalRecord} from './screens/MedicalRecord'

function App() {
  return (
    <>
    <NormalizeStyles />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/medical-record' element={<MedicalRecord />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
