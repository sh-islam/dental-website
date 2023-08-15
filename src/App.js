import React from 'react';
import NavBar from './Components/Navbar';
import About from 'dental-website/Components/About';
import IG_slider from './Components/IG_slider';




function App() {
    
    return (
        <div className="App">
            <NavBar />
            <div className="app-container">
                <About/>
                <IG_slider/>
            </div>
        </div>
    );
}

export default App;
