
import React from 'react';
import './resources/styles.css';

import Header from "./components/header_footer/Header.js";
import Featured from "./components/featured/Featured.js";
import Biography from "./components/biography/Biography.js";
import Gigs from "./components/gigs/Gigs.js";
import Footer from "./components/header_footer/Footer.js";
import MusicLinks from "./components/music/MusicLinks.js";
import Video from "./components/video/Video.js";

const App = () => {
  return (
    <React.Fragment>
        <Header/>

        <>
            <Featured />
        </>
        <>
            <Biography />
        </>
        <>
            <Gigs />
        </>
        <>
            <MusicLinks/>
        </>
        <>
            <Video/>
        </>

        <Footer/>
    </React.Fragment>
  );
}

export default App;
