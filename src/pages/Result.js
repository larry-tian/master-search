import React, { useState, useEffect, useLayoutEffect } from 'react';

import { useNavigate, useLocation, Link } from 'react-router-dom';

import Loading from './Loading'
import Footer from './Footer'


// Material UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import '../css/Result.css';

const Result = () => {

    // States
    const [data, setData] = React.useState(null);
    const [sortType, setSortType] = React.useState('FullName'); // test JASON
    const [dataFetch, setDataFetch] = React.useState(false);

    const [loadingResult, setLoadingResult] = React.useState(true);
    const [listData, setListData] = React.useState(null);

    // Store the organization's ID
    const location = useLocation()
    const { org } = location.state

    // Store the organization's info
    let orgInfo = "";

    if (listData != null) {
        orgInfo = listData.filter(each => each.ClientCode == org)[0]
    }

    console.log(data)
    // Import data
    const fetchData = () => {
        const fakeData = require("./MOCK_DATA.json");
        console.log(fakeData)

        setData(fakeData)
        setDataFetch(true);
        setLoadingResult(false);

        // const url = "https://capstone.masterworks.cloud/v1/people?clientcode=" + org;
        // console.log(url)
        // // Fetch people's list data
        // fetch(url)
        // .then((response) => response.json())
        // .then((actualData) => {
        //     console.log(actualData)
        //     setData(actualData);
        //     setDataFetch(true);
        //     setLoadingResult(false);
        // })
        // .catch((err) => {
        //     console.log(err.message);
        // });

        // Fetch organization list data
        fetch('https://capstone.masterworks.cloud/v1/organizationlist_2')
            .then((response) => response.json())
            .then((actualData) => setListData(actualData))
            .catch((err) => {
                console.log(err.message);
            });

        // Fake data loading
    }

    if (data != null) {
        if (sortType == "AdsViewed") {
            data.sort((a, b) => b[sortType] - a[sortType]);
        } else if (sortType == "NumberOfActions") {
            data.sort((a, b) => b[sortType] - a[sortType]);
        } else if (sortType == "FullName") {
            data.sort((a,b) => a[sortType].localeCompare(b[sortType]));
        } else if (sortType == "TotalGift") {
            data.sort((a, b) => b[sortType] - a[sortType]);
            // data.sort((a,b) => parseFloat(a[sortType].slice(1)) - parseFloat(b[sortType].slice(1)));
        } else if (sortType == "LastActive") {
            data.sort((a,b) => Date.parse(b[sortType]) - Date.parse(a[sortType]));
        } 
    }

    const navigate = useNavigate();

    // Search for a specific user

    // let warning;

    // const handleSearchSubmit = () => {
    //     if (document.getElementById("first-name")) {
    //         const firstName = document.getElementById("first-name").value
    //         setFilteredData(data.filter(each => each.first_name == firstName))
    //         setSearchStatus(true)
    //     } else if (document.getElementById("last-name")) {
    //         const lastName = document.getElementById("last-name").value
    //         setFilteredData(data.filter(each => each.last_name == lastName))
    //         setSearchStatus(true)
    //     } else if (document.getElementById("first-name") && document.getElementById("last-name")) {
    //         const firstName = document.getElementById("first-name").value
    //         const lastName = document.getElementById("last-name").value
    //         setFilteredData(data.filter(each => (each.first_name == firstName && each.last_name == lastName)))
    //         setSearchStatus(true)
    //     } else {
    //         warning = <p>Please input either a last name or a first name</p>
    //     }
    //     // const lastName = document.getElementById("last-name").value
    //     // console.log(firstName)
    //     // let answer = data.filter(each => each.first_name == firstName && each.last_name == lastName)
    // }

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
        // if (searchStatus == true) {
        //     displayData = filteredData
        // } else {
        //     displayData = data
        // }

        resultContent = data.map((item, key) => {
            return <div key={key}>

                {/* Pass in CUID as state to generate profile */}
                <Link className="link-to-profile" to="/profile" state={{ data: item, org: org }}>
                    <div className="result-card-item">
                        <p className="result-card-item-name"><strong className="result-card-item-name-text">{item.FullName}</strong></p>
                        <p className="result-card-item-data">Total Gift: <strong className="result-card-item-data-text">{item.TotalGift}</strong></p>
                        <p className="result-card-item-data">Ads Viewed: <strong className="result-card-item-data-text">{item.AdsViewed}</strong></p>
                        <p className="result-card-item-data">Interactions: <strong className="result-card-item-data-text">{item.NumberOfActions}</strong></p>
                        <p className="result-card-item-data">Last Active: <strong className="result-card-item-data-text">{item.LastActive}</strong></p>
                    </div>
                </Link>
            </div>;

        });
    } else {

        resultContent = <div>
            <p>Sorry, we didn't find anything :(</p>
        </div>

    }

    // Placeholder
    let searchUserContent =
        <div className="mb-3">&nbsp;</div>;

    let content;
    if (loadingResult) {
        content = <Loading />
    } else {
        content = <div>
            {/* Title Section */}
            <div className="result-title">
                {/* Back button */}
                <div className="back-button-content">
                    <button className="back-button" onClick={directHome}>
                        <img src="https://capstone.masterworks.cloud/img/backButton.svg" className="back-button-icon" />
                        <p className="back-title"><strong>Select another organization</strong></p>
                    </button>
                </div>

                {/* Titles */}
                <h1 className="heading-one mt-4"><strong>{orgInfo.ClientName}</strong></h1>
                <p className="heading-small-title mt-3"><strong>{data.length} USER(S) FOUND</strong></p>

                {/* Search a specific user */}
                {searchUserContent}

                {/* Filter UIs */}
                {/* <div className="row filter-ui-row">
                    <p className='filter-ui-desc'>Search a specific user:</p>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, minWidth: 160 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                    <TextField
                        required
                        id="first-name"
                        label="First Name"
                        size="small"
                        className="mt-2"
                    />

                    <TextField
                        required
                        id="last-name"
                        label="Last Name"
                        size="small"
                        className="mt-2"
                    />

                    </Box>

                    <button className="search-user-button" onClick={handleSearchSubmit}><strong>Search</strong></button>

                </div> */}
            </div>
            
            {/* {warning} */}

            {/* The list of result */}
            <div className="result-content-background">
                <div className="row result-content-sort-ui">
                    <p className='filter-ui-desc'>Sort the table:</p>

                    {/* Selection box for Sort By */}
                    <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Sort By"
                            onChange={function (event) {
                                setSortType(event.target.value); 
                            }}
                        >
                            <MenuItem value={"FullName"}>Full Name</MenuItem>
                            <MenuItem value={"TotalGift"}>Gift Amount</MenuItem>
                            <MenuItem value={"AdsViewed"}>Ads Viewed</MenuItem>
                            <MenuItem value={"NumberOfActions"}>Number of Actions</MenuItem>
                            <MenuItem value={"LastActive"}>Last Active</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {/* Table titles
                <div className="result-card-title row">
                    <p className="table-heading" id="first-table-heading">NAME</p>
                    <p className="table-heading" id="rest-table-heading">TOTAL GIFT</p>
                    <p className="table-heading" id="rest-table-heading">ADS VIEWED</p>
                    <p className="table-heading" id="rest-table-heading"># OF ACTIONS</p>
                    <p className="table-heading" id="rest-table-heading">LAST ACTIVE</p>
                </div> */}

                {/* List items */}
                <div className="result-card-content pb-5">
                    {resultContent}
                </div>
            </div>
            <Footer />
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Result;