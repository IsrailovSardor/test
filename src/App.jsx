import React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Banner} from "./components/Banner/Banner";

export const App = () => {
    return (
        <div className="app">
            <Header />
            <Banner />
            <Footer />
        </div>
    );
};
