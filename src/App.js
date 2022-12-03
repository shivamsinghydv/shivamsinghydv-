import React, { useState } from 'react';
import './App.css'
import Header from './Header';
import Main from '../src/main';
import footer from './bottom';

const Hello = () => {
    return <h1>Shivam</h1>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />)

export default App;