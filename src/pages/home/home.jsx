import React from "react";
import ResultLayout from "../../layouts/resultLayout/resultLayout";
import Suggestions from "../../components/suggestions/suggestions";
import NewsLetter from "../../components/newsletter/newsLetter";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Outlet></Outlet>
            <Suggestions></Suggestions>
            <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;
