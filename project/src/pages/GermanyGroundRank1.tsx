import { Link } from "react-router-dom";
import pz_35_t from "../assets/pz_35_t.png";

function Rank1() {
    return (

            <div className="App-content">
                <div className="Tree-select">
                    <Link className="trees" to="pz35t">
                        <img src={pz_35_t} alt="link to Pz.35(t)" />
                    </Link>
                </div>
            </div>

    );
}

export default Rank1;
