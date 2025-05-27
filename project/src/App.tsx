import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import air from "./assets/air_veh.png";
import tonk from "./assets/ground_veh.png";
import heli from "./assets/heli_veh.png";
import fleet from "./assets/fleet_veh.png";

import AirTree from "./pages/AirTree";
import GroundTree from "./pages/GroundTree";
import GermanyGroundTree from "./pages/GermanyGroundTree";
import Rank1 from "./pages/GermanyGroundRank1";
import Pz35t from "./pages/Pz35T.tsx";
import HeliTree from "./pages/HeliTree";
import FleetTree from "./pages/FleetTree";

function App() {
    return (
        <>
            <header className="App-header">
                <p className="App-header-text">Welcome to War Thunder Bootleg Wiki</p>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/air-tree" element={<AirTree />} />
                <Route path="/ground-tree" element={<GroundTree />} />
                <Route path="/heli-tree" element={<HeliTree />} />
                <Route path="/fleet-tree" element={<FleetTree />} />

                <Route path="/ground-tree/germany" element={<GermanyGroundTree />} />
                <Route path="/ground-tree/germany/rank1" element={<Rank1 />} />
                <Route path="/ground-tree/germany/rank1/pz35t" element={<Pz35t />} />
            </Routes>
        </>
    );
}

function Home() {
    return (
        <div className="App-content">
            <div className="Tree-select">
                <Link className="trees" to="/air-tree"><img src={air} alt="air tree link" /></Link>
                <Link className="trees" to="/ground-tree"><img src={tonk} alt="ground tree link" /></Link>
                <Link className="trees" to="/heli-tree"><img src={heli} alt="helicopter tree link" /></Link>
                <Link className="trees" to="/fleet-tree"><img src={fleet} alt="fleet tree link" /></Link>
            </div>

            <div className="menu">
                <p className="menu-head">Information catalog</p>
                <div className="menu-list">
                    <div className="menu-list-item">Beginner information</div>
                    <div className="menu-list-item">Main mechanics</div>
                    <div className="menu-list-item">Vehicle weaponry</div>
                </div>
            </div>
        </div>
    );
}

export default App;
