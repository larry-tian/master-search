import React, { useState, useEffect, useLayoutEffect} from 'react';

import Loading from './Loading'

import Footer from './Footer'

import { useNavigate, useLocation, Link } from 'react-router-dom';

// Material UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import '../css/Home.css'
import { FormControlUnstyledContext } from '@mui/base';

const Home = () => {

    // States
    const [org, setOrg] = React.useState('');
    const [loadingResult, setLoadingResult] = React.useState(true);
    const [listData, setListData] = React.useState(null);

    // Handle Changes
    const handleOrgChange = (event) => {
        setOrg(event.target.value);

    };

    // Set the display to the starting page when user first opened the web
    useEffect(() => {
        // getOrganizationList();
        fetchData();
    }, [])

    const fetchData = () => {
        fetch('https://capstone.masterworks.cloud/v1/organizationlist')
            .then((response) => response.json())
            .then((actualData) => {
                setListData(actualData);
                setLoadingResult(false);
            })
            .catch((err) => {
                console.log(err.message);
            });

        // setListData(require('../data/outputs_clientlookup.json'));
    }

    let content;

    if (listData != null){
        
        let organizationlist;

        organizationlist = listData.map((item, index) => {
            return (<MenuItem value={item.ClientCode} key={index}>{item.ClientName}</MenuItem>);

        });
        content = <div>

            {/* Title Section */}
            <div className="home-title">
                <p className="heading-small-title"><strong>DONOR INTERACTION TRACKER</strong></p>
                <h1 className="heading-one"><strong>MasterView</strong></h1>
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
                                {organizationlist}
                            </Select>
                        </FormControl>

                        {/* Button to submit organization */}
                        <Link to="/result" state={{ org: org }}> <button className="home-search-button"><strong>Search</strong></button></Link>
                    </div>
                </div>
            </div>
            
            {/* Desc Section */}
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                        <div className="home-desc-sec">
                            <img className="home-desc-icon" src="https://capstone.masterworks.cloud/img/person.svg" alt="person icon"/>
                            <p className="home-desc"> 
                                Find detailed information on each user and see a comprehensive, per-user history of interactions 
                                with an organization’s ads, their website, and their offline history, includingboth giving and communication.
                            </p>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                        <div className="home-desc-sec">
                            <img className="home-desc-icon" src="https://capstone.masterworks.cloud/img/stats.svg" alt="bargraph icon"/>
                            <p className="home-desc">
                                Search for a specific user’s history and use this helpful information to validate that the client’s 
                                investment in digital marketing is effective and delivering their intended results. 
                            </p>
                        </div>

                    </div>

                    

                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                        <div className="home-desc-sec">
                            <img className="home-desc-icon" src="https://capstone.masterworks.cloud/img/lock.svg" alt="lock icon"/>
                            <p className="home-desc">
                                This user-tracking tool and the information that it provides 
                                should be a key driver that helps lock in your relationship with your 
                                clients so that they feel confident in the work that Masterworks is doing.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    } else {
        content = <Loading />
    }
    return (
        <div>
            {content}
            <Footer />
        </div>
    )
    
}

export default Home;