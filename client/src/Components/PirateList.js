import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const PirateList = (props) => {
    const [allPirates, setAllPirates] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate")
            .then((res) => setAllPirates(res.data))
            .catch((err) => console.log(err))
    }, []);

    const removeFromDom = (pirateId) => {
        setAllPirates(allPirates.filter(pirate => pirate._id != pirateId))
    }

    return (
        <div>
            <div className="header">
                <h1>Pirate Crew</h1>
                <Link to="/pirate/new"><button>Add Pirate</button></Link>
            </div>
            <div>
                {
                    allPirates.map((pirate, index) => (
                        <div key={index} className="onepirate">
                            <img src={pirate.imageURL} />
                            <div className="pirateinfo">
                                <h2>{pirate.crewMember}</h2>
                                <Link to={`/pirate/${pirate._id}`}><button className="blue-btn"> View Pirate</button></Link>
                                <DeleteButton pirateId={pirate._id} successCallback={() => removeFromDom(pirate._id)} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PirateList;