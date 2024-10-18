import { NavBar } from "../Components/nav bar/NavBar.jsx";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';

export const Homepage = () => {
    return (
        <div className="homepage"> {/* Apply the class here */}
            <NavBar />
            <h1>CreativeU</h1>
        </div>
    );
};
