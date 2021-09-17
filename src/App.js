
import React, {Fragment, lazy, Suspense} from 'react';
import './resources/styles.css';

import Header from "./components/header_footer/Header.js";
import Featured from "./components/featured/Featured.js";
import Biography from "./components/biography/Biography.js";
import Gigs from "./components/gigs/Gigs.js";
import Footer from "./components/header_footer/Footer.js";

const MusicLinks = lazy( () => import("./components/music/MusicLinks.js"));
const Video = lazy( () => import("./components/video/Video.js"));
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
            <Suspense fallback={<Fragment>Loading...</Fragment>}>
                <MusicLinks/>
            </Suspense>
        </>
        <>
            <Suspense fallback={<Fragment>Loading...</Fragment>}>
                <Video/>
            </Suspense>
        </>

        <Footer/>
    </React.Fragment>
  );
}

export default App;
