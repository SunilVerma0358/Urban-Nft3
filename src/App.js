import { Route, Routes } from "react-router-dom";
import "./App.css";
import BigCard from "./Components/BigCard";
import Header from "./Components/Header";
import SmallCard from "./Components/SmallCard";
import DesktopNav from "./Components/DesktopNav";
import HomePage from "./Components/HomePageMain/HomePage";
import CardMap from "./Components/CardMap";
import History from "./Components/History";
import Tranding from "./Components/Tranding";

function App() {
    return ( <
        >
        <
        div className = "flex " >
        <
        div >
        <
        Header / >
        <
        /div>{" "} <
        div className = "bg-[#EDF1F2] min-h-screen  pe-[20px] sm:pe-[43px] w-full ps-[80px] sm:ps-[100px] md:ps-[200px] lg:ps-[320px] xl:ps-[315px]" > { " " } <
        DesktopNav / >
        <
        Routes >
        <
        Route path = "/"
        element = { < HomePage / > }
        />{" "} <
        Route path = "/home"
        element = { < BigCard / > }
        />{" "} <
        Route path = "/BigCard"
        element = { < BigCard / > }
        />{" "} <
        Route path = "/CardMap"
        element = { < CardMap / > }
        />{" "} <
        Route path = "/History"
        element = { < History / > }
        />{" "} <
        Route path = "/Treading"
        element = { < Tranding / > }
        />{" "} <
        Route path = "/SmallCard"
        element = { < SmallCard / > }
        />{" "} < /
        Routes > { " " } <
        /div>{" "} < /
        div > { " " } <
        />
    );
}

export default App;