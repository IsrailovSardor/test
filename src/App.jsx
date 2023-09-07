import React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Banner} from "./components/Banner/Banner";
import {Decoration} from "./components/Decoration/Decoration";

export const App = () => {
    return (
        <div className="app">
            <Header />
            <Banner />
            <Decoration />
            <Footer />
        </div>
    );
};
