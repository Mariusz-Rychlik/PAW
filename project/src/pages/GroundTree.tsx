import { Link } from "react-router-dom";
import germany from "../assets/flag_of_germany.png";

function GroundTree() {
    return (
        <div className="App-content">
            <div className="Tree-select">
                <Link className="trees" to="/ground-tree/germany">
                    <img src={germany} alt="germany ground tree link" />
                </Link>
            </div>
        </div>
    );
}

export default GroundTree;
