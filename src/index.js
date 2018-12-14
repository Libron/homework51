import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './js/header';
import Content from "./js/content";
import Footer from "./js/footer";
import * as serviceWorker from './serviceWorker';

const components = (
    <React.Fragment>
        <Header />
        <Content />
        <Footer />
    </React.Fragment>
);

const root = document.getElementById('root');
ReactDOM.render(components, root);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
