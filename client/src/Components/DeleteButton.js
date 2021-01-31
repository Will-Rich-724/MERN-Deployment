import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const {pirateId, successCallback} = props
    const deletePirate = e => {
        axios.delete(`http://localhost:8000/api/pirate/${pirateId}`)
            .then(res => {successCallback();})
    }

    return(
        <button className="red-btn" onClick={deletePirate}>
            Walk the Plank
        </button>
    )
}

export default DeleteButton;