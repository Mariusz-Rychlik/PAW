import { useEffect, useState } from "react";
import { getTanks } from "../api";
import tonksmol from "../assets/pz_35_t_closeup.png";
interface Tank {
    name: string;
    information: string;
    hullArmor: string;
    turretArmor: string;
    crew: string;
    forwardSpeed: string;
    backwardSpeed: string;
    enginePower: string;
    weight: string;
    powerToWeightRatio: string;
    mainArmament: string;
    ammunition: string;
    verticalTurretRotation: string;
    horizontalTurretRotation: string;
    reloadSpeed: string;
    verticalGuidance: string;
}


function Pz35t() {
    const [tank, setTank] = useState<Tank | null>(null);

    useEffect(() => {
        getTanks().then((res) => {
            const tanks = res.data as Tank[];
            const found = tanks.find(t => t.name === "Pz.35(t)");
            if (found) setTank(found);
        });
    }, []);

    if (!tank) return <p>Loading...</p>;

    return (
        <div className="App-content">
            <img src={tonksmol} alt="Pz.35(t)"/>
            <div className={"tonking"}>
            <h2 className={"Tank-name"}><p className={"Tank-name-text"}>{tank.name}</p></h2>
                <h3 className={"Tank-information"}>Tank information: </h3>
            <p className={"Tonk-info"}>{tank.information}</p>
                <div className={"TONK"}>
                    <div className={"Tank-survivability"}>
                        <h3 className={"Tank-information-survivability"}>Tank Survivability: </h3>
                        <ul className={"Tank-information-survivability-list"}>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Hull Armor:</b> {tank.hullArmor}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Turret Armor:</b> {tank.turretArmor}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Crew:</b> {tank.crew}
                            </li>
                        </ul>
                    </div>
                    <div className={"Tank-survivability"}>
                        <h3 className={"Tank-information-survivability"}>Tank Mobility: </h3>
                        <ul className={"Tank-information-survivability-list"}>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Forward Speed:</b> {tank.forwardSpeed}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Backward Speed:</b> {tank.backwardSpeed}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Engine Power:</b> {tank.enginePower}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Weight:</b> {tank.weight}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Power-to-Weight Ratio:</b> {tank.powerToWeightRatio}
                            </li>
                        </ul>
                    </div>
                    <div className={"Tank-survivability"}>
                        <h3 className={"Tank-information-survivability"}>Tank Armament: </h3>
                        <ul className={"Tank-information-survivability-list"}>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Main Armament:</b> {tank.mainArmament}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Ammunition:</b> {tank.ammunition}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Vertical Turret Rotation:</b> {tank.verticalTurretRotation}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Horizontal Turret Rotation:</b> {tank.horizontalTurretRotation}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Reload Speed:</b> {tank.reloadSpeed}
                            </li>
                            <li className={"Tank-information-survivability-list-item"}>
                                <b>Vertical Guidance:</b> {tank.verticalGuidance}
                            </li>
                        </ul>
                    </div>
                </div>
                {/*

                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                */}
            </div>
        </div>
    );
}

export default Pz35t;
