import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const PirateSingle = (props) => {
    const [crewMember, setCrewMember] = useState();
    const [role, setRole] = useState();
    const [eyePatch, setEyePatch] = useState();
    const [hookHand, setHookHand] = useState();
    const [pegLeg, setPegLeg] = useState();
    const [imageURL, setImageURL] = useState();
    const [catchphrase, setCatchphrase] = useState();
    const [treasureChest, setTreasureChest] = useState();
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${props.id}`)
            .then(res => {
                setCrewMember(res.data.crewMember);
                setRole(res.data.role);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHand);
                setPegLeg(res.data.pegLeg);
                setImageURL(res.data.imageURL);
                setCatchphrase(res.data.catchphrase);
                setTreasureChest(res.data.treasureChest)
            })
            .catch((err) => console.log(err));
    }, []);

    const updateThisPirate = () => {
        axios.put(`http://localhost:8000/api/pirate/${props.id}`, {
            crewMember,
            role,
            eyePatch,
            hookHand,
            pegLeg,
            imageURL,
            catchphrase,
            treasureChest,
        })
            .then((res) => console.log(res))
            .catch(err => console.log(err));
    };

    const eyePatchHandler = (e) => {
        e.preventDefault();
        const updateEyePatch = (callback) => {
            eyePatch ? setEyePatch(false) : setEyePatch(true);
            console.log(eyePatch);
            callback();
        }
        updateEyePatch(updateThisPirate);
    };

    const hookHandHandler = e => {
        e.preventDefault();
        const updateHookHand = (callback) => {
            hookHand ? setHookHand(false) : setHookHand(true);
            console.log(hookHand);
            callback();
        }
        updateHookHand(updateThisPirate);
        };

        const pegLegHandler = e => {
        e.preventDefault();
        const updatePegLeg = (callback) => {
            pegLeg ? setPegLeg(false) : setPegLeg(true);
            callback();
        }
        updatePegLeg(updateThisPirate)
        };


        return (
            <div>
                <div className="header">
                    <h1>{crewMember}</h1>
                </div>
                <div>
                    <div className="single-left">
                        <img src={imageURL} />
                        <h2>{catchphrase}</h2>
                    </div>
                    <div className="single-right">
                        <h2>About</h2>
                        <div><p>Position: {role}</p></div>
                        <div><p>Treasures: {treasureChest}</p></div>
                        <div><p>Eye-Patch: {eyePatch ? 'Yes' : 'No'}</p>
                            <button onClick={eyePatchHandler} style={eyePatch ? { backgroundColor: "red" } : { backgroundColor: "green" }}>Eye-Patch</button></div>
                        <div><p>Hook-Hand: {hookHand ? 'Yes' : 'No'}</p>
                            <button onClick={hookHandHandler} style={hookHand ? { backgroundColor: "red" } : { backgroundColor: "green" }}>Hook-Hand</button></div>
                        <div><p>Peg-Leg: {pegLeg ? 'Yes' : 'No'}</p>
                            <button onClick={pegLegHandler} style={pegLeg ? { backgroundColor: "red" } : { backgroundColor: "green" }}>Peg-Leg</button></div>
                    </div>
                </div>
            </div>
        );
    };

    export default PirateSingle;