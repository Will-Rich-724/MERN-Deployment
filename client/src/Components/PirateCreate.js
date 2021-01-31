import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const PirateCreate = (props) => {
    const [crewMember, setCrewMember] = useState("");
    const [role, setRole] = useState("Captain");
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [pegLeg, setPegLeg] = useState(true);
    const [imageURL, setImageURL] = useState("");
    const [catchphrase, setCatchphrase] = useState("");
    const [treasureChest, setTreasureChest] = useState();
    const [errors, setErrors] = useState({});

    const onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirate", {
            crewMember,
            role,
            eyePatch,
            hookHand,
            pegLeg,
            imageURL,
            catchphrase,
            treasureChest
        })
            .then((res) => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate(`/pirate/${res.data._id}`)
                }
            })
            .catch(err => console.log(err))
    };

    const eyePatchHandler = e => {
        e.preventDefault();
        eyePatch ? setEyePatch(false) : setEyePatch(true);
    };

    const hookHandHandler = e => {
        e.preventDefault();
        hookHand ? setHookHand(false) : setHookHand(true);
    };

    const pegLegHandler = e => {
        e.preventDefault();
        pegLeg ? setPegLeg(false) : setPegLeg(true);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="header">
                <h1>Add Pirate</h1>
                <Link to="/pirates"><button>Crew Board</button></Link>
            </div>
            <div className="input-one">
                <label>Pirate Name:</label>
                <br />
                <input type="text" onChange={(e) => setCrewMember(e.target.value)} />
                {errors.crewMember ? (
                    <span style={{ color: "red" }}>{errors.crewMember.message}</span>
                ) : null}
            </div>
            <div className="input-two">
                <label>Crew Position: </label>
                <br />
                {/* enum: ['Captain', 'First Mate', 'Cook', 'Quarter Master', 'Boatswain', 'Powder Monkey'], */}
                <select onChange={(e) => setRole(e.target.value)} defaultValue={"Captain"}>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Cook">Cook</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
                {errors.role ? (
                    <span style={{ color: "red" }}>{errors.role.message}</span>
                ) : null}
            </div>
            <div className="input-one">
                <label>Image URL:</label>
                <br />
                <input type="text" onChange={(e) => setImageURL(e.target.value)} />
                {errors.imageURL ? (
                    <span style={{ color: "red" }}>{errors.imageURL.message}</span>
                ) : null}
            </div>
            <div className="input-one">
                <label># of Treasure Chest:</label>
                <br />
                <input type="number" min="1" max="10" onChange={(e) => setTreasureChest(e.target.value)} />
                {errors.treasureChest ? (
                    <span style={{ color: "red" }}>{errors.treasureChest.message}</span>
                ) : null}
            </div>
            <div className="input-two">
                <div>
                    <button onClick={eyePatchHandler} style={eyePatch ? { backgroundColor: "green" } : { backgroundColor: "red" }}>Eye-Patch</button>
                    {errors.eyePatch ? (
                        <span style={{ color: "red" }}>{errors.eyePatch.message}</span>
                    ) : null}
                </div>       
                <div>
                    <button onClick={hookHandHandler} style={hookHand ? { backgroundColor: "green" } : { backgroundColor: "red" }}>Hook-Hand</button>
                    {errors.hookHand ? (
                        <span style={{ color: "red" }}>{errors.hookHand.message}</span>
                    ) : null}
                </div>
                <div>
                    <button onClick={pegLegHandler} style={pegLeg ? { backgroundColor: "green" } : { backgroundColor: "red" }}>Peg-Leg</button>
                    {errors.pegLeg ? (
                        <span style={{ color: "red" }}>{errors.pegLeg.message}</span>
                    ) : null}
                </div>
            </div>
            <div className="input-one">
                <label>Pirate Catch Phrase:</label>
                <br />
                <input type="text" onChange={(e) => setCatchphrase(e.target.value)} />
                {errors.catchphrase ? (
                    <span style={{ color: "red" }}>{errors.catchphrase.message}</span>
                ) : null}
            </div>
            
            <br />
            <button type="submit" className="blue-btn">Add Pirate</button>
        </form>
    )
};

export default PirateCreate;