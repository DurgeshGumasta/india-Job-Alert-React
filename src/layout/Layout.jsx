import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css"
export default function Layout({ children }) {

    return (
        <div className="global-container">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}