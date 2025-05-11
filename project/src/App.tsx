import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import air from "./assets/air_veh.png"
import tonk from "./assets/ground_veh.png"
import heli from "./assets/heli_veh.png"
import fleet from "./assets/fleet_veh.png"

import AirTree from "./pages/AirTree";
import GroundTree from "./pages/GroundTree";
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
            </Routes>
        </>
    );
}

function Home() {
    return (
        <div className="App-content">
            <div className="Tree-select">
                <Link className="trees" to="/air-tree"><img src={air} alt="air tree link"/></Link>
                <Link className="trees" to="/ground-tree"><img src={tonk} alt="ground tree link"/></Link>
                <Link className="trees" to="/heli-tree"><img src={heli} alt="helicopter tree link"/></Link>
                <Link className="trees" to="/fleet-tree"><img src={fleet} alt="fleet tree link"/></Link>
            </div>

            <div className="menu">
                <p className="menu-head">Information catalog</p>
                <div className="menu-list">
                    <div className="menu-list-item">Begginer information</div>
                    <div className="menu-list-item">Main mechanics</div>
                    <div className="menu-list-item">Vehicle weaponry</div>
                </div>
            </div>
        </div>
    );
}

//todo moe of this tho now complete the trees, also hek tems for what to do

export default App;
