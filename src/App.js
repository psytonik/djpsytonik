import React, {Fragment, Suspense} from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';

import Header from "./components/header_footer/Header.js";
import Featured from "./components/featured/Featured.js";
import Biography from "./components/biography/Biography.js";
import Gigs from "./components/gigs/Gigs.js";
import Footer from "./components/header_footer/Footer.js";
import Contacts from './components/contacts/Contacts.js';

const MusicLinks = React.lazy( () => import("./components/music/MusicLinks.js") );
const Video = React.lazy( () => import("./components/video/Video.js") );

const App = () => {
  return (
    <React.Fragment>
        <Header/>

        <Element name="featured">
            <Featured />
        </Element>

        <Element name="biography">
            <Biography />
        </Element>

        <Element name="gigs">
            <Gigs />
        </Element>

            <Suspense fallback={<Fragment>Loading...</Fragment>}>
                <Element name="music">
                    <MusicLinks/>
                </Element>

                <Element name="video">
                    <Video/>
                </Element>
            </Suspense>

        <Element name="contacts">
            <Contacts />
        </Element>

        <Footer/>
    </React.Fragment>
  );
}

export default App;
