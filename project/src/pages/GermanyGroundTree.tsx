import { Link } from "react-router-dom";
import rank1 from "../assets/rank_1.png";

function GermanyGroundTree() {
    return (
            <div className="App-content">
                <div className="Tree-select">
                    <Link className="trees" to="rank1">
                        <img src={rank1} alt="link to Rank 1" />
                    </Link>
                </div>
            </div>

    );
}

export default GermanyGroundTree;
