import React, { useState, useEffect, useLayoutEffect} from 'react';

import { useNavigate, Link } from 'react-router-dom';

import backButton from '../img/backButton.svg'
import menuButton from '../img/menuButton.svg'

import '../css/Result.css';

const Result = () => {

    // States
    const [data, setData] = React.useState(null);
    const [dataFetch, setDataFetch] = React.useState(false);
    const [searchUser, setSearchUser] = React.useState(false);

    // Import fake data
    const fetchData = () => {
        setData(require('../data/fake_outputs_people_list.json'));
        setDataFetch(true);
    }

    // const changeToSearchUser = () => {
    //     setSearchUser(true);
    // }

    const navigate = useNavigate();

    const directHome = () => {
        navigate('/');
    }

    useEffect(() => {
        fetchData();
      }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    let resultContent;

    if (dataFetch == true) {
        
        resultContent = data.map(item => {
            return <div key="{item.CUID}">
                    {/* Pass in CUID as state to generate profile */}
                    <Link className="link-to-profile" to="/profile" state={{ data: item }}>
                        <div className="result-card-item">
                            <p className="result-card-item-name"><strong className="result-card-item-name-text">{item.first_name + " " + item.last_name}</strong></p>

                            <div className="result-card-item-space">&nbsp;</div>

                            <p className="result-card-item-data"><strong className="result-card-item-data-text">{item.Total_Gift}</strong></p>
                            <div className="result-card-item-data"><strong className="result-card-item-data-text">{item.Total_Gift}</strong></div>
                            <div className="result-card-item-data"><strong className="result-card-item-data-text">{item.Total_Gift}</strong></div>
                            <div className="result-card-item-data"><strong className="result-card-item-data-text">{item.Total_Gift}</strong></div>
                            <img src={menuButton} className="result-card-menu-button"/>
                        </div>
                    </Link>
                </div>;

        });
    } else {

        resultContent = <div>
            <p>Sorry, we didn't find anything :(</p>
        </div>

    }
    
    console.log(searchUser)

    // Placeholder
    let searchUserContent = 
        <div className="mb-3">&nbsp;</div>;

    // if (searchUser == true) {
    //     searchUserContent = <div className="search-user-content">
    //         <input type="radio" name="searchType" id="name" value="name" className="search-user-radio"/>
    //         <label for="name" className="search-user-label">Name</label>

    //         <input type="radio" name="searchType" id="email" value="email" className="search-user-radio"/>
    //         <label for="email" className="search-user-label">Email</label>

    //         <input type="radio" name="searchType" id="cuid" value="cuid" className="search-user-radio"/>
    //         <label for="cuid" className="search-user-label">CUID</label>
    //     </div>
    // } else {
    //     searchUserContent = 
    //     <button className="search-for-user-button" onClick={changeToSearchUser}><strong className="search-user-button-text">Search for a specific user</strong></button>
    // }

    return (
        <div>
            {/* Title Section */}
            <div className="result-title">

                {/* Back button */}
                <div className="back-button-content">
                    <button className="back-button" onClick={directHome}>
                            <img src={backButton} className="back-button-icon"/>
                            <p className="back-title"><strong>Select another organization</strong></p>
                    </button>
                </div>

                {/* Titles */}
                <h1 className="heading-one mt-4"><strong>SeattleTeam</strong></h1>
                <p className="heading-small-title"><strong>5 USERS FOUND</strong></p>

                {/* Search a specific user */}
                {searchUserContent}

            </div>

            {/* The list of result */}
            <div className="result-content-background">
                {/* Table titles */}
                <div className="result-card-title">
                    <p>Title goes here</p>
                </div>

                {/* List items */}
                <div className="result-card-content">
                    {resultContent}
                </div>
            </div>
        </div>
    )
}

export default Result;