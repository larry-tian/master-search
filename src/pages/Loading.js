import React, { useState, useEffect, useLayoutEffect} from 'react';

import { useNavigate } from 'react-router-dom';

import '../css/Loading.css';

const Loading = () => {

    // Redirect to loading page
    const navigate = useNavigate();

    const cancelRedirect = () => {
        navigate('/')
    }

    const directResult = () => {
        navigate('/result')
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>

            {/* Loading icon */}
            <div className="loading-icon-content">
                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>

            {/* Text */}
            <div className="loading-text-content">
                <h1 className="heading-one"><strong>Searching for result...</strong></h1>
                <p className="heading-small-title" id="loading-small-title"><strong>ROME WASN'T BUILT IN A DAY</strong></p>
                <button className="cancel-button" onClick={cancelRedirect}><strong>Cancel</strong></button>

                <button className="cancel-button" onClick={directResult}><strong>Result</strong></button>

            </div>
        </div>
    )
}

export default Loading;