import React, { useState, useEffect, useLayoutEffect} from 'react';

import person from '../img/person.svg'
import stats from '../img/stats.svg'
import lock from '../img/lock.svg'

// Material UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useNavigate } from 'react-router-dom';

import '../css/Home.css'

const Home = () => {

    // States
    const [org, setOrg] = React.useState('');

    // Handle Changes
    const handleOrgChange = (event) => {
        setOrg(event.target.value);
    };

    // Redirect to loading page
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/loading')
    }

    return (
        <div>
            {/* Title Section */}
            <div className="home-title">
                <p className="heading-small-title"><strong>DONOR INTERACTION TRACKER</strong></p>
                <h1 className="heading-one"><strong>MasterSearch</strong></h1>
            </div>
            
            {/* Search Section */}
            <div className="home-search">
                <div className="home-search-content">
                    <h2 className="home-choose-org-title"><strong>Choose an Organization</strong></h2>
                    <div className="home-search-submission-content">

                        {/* Selection box for organization */}
                        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                            <InputLabel id="demo-simple-select-label">Organization</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={org}
                                label="Organization"
                                onChange={handleOrgChange}
                            >
                                <MenuItem value={"org 1"}>SeattleTeam</MenuItem>
                                <MenuItem value={"org 2"}>Seattle Duck Duck Go</MenuItem>
                                <MenuItem value={"org 3"}>Seattle iSchool</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Button to submit organization */}
                        <button className="home-search-button" onClick={redirect}><strong>Search</strong></button>
                    </div>
                </div>
            </div>
            
            {/* Desc Section */}
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                        <div className="home-desc-sec">
                            <img className="home-desc-icon" src={person} alt="person icon"/>
                            <p className="home-desc"> 
                                Find detailed information on each user and see a comprehensive, per-user history of interactions 
                                with an organization’s ads, their website, and their offline history, includingboth giving and communication.
                            </p>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                        <div className="home-desc-sec">
                            <img className="home-desc-icon" src={stats} alt="bargraph icon"/>
                            <p className="home-desc">
                                Search for a specific user’s history and use this helpful information to validate that the client’s 
                                investment in digital marketing is effective and delivering their intended results. 
                            </p>
                        </div>

                    </div>

                    

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                        <div className="home-desc-sec">
                            <img className="home-desc-icon" src={lock} alt="lock icon"/>
                            <p className="home-desc">
                                Search for a specific user’s history and use this helpful information to validate that the client’s 
                                investment in digital marketing is effective and delivering their intended results. 
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Home;