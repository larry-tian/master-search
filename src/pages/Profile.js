import React, { useState, useEffect, useLayoutEffect} from 'react';

import Footer from './Footer'
import { useNavigate, useLocation, Link } from 'react-router-dom';

// Chart.js
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

// Material UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import '../css/Profile.css';

const Profile = () => {

    // States
    const [summaryData, setSummaryData] = React.useState(null);
    const [allEventsData, setAllEventsData] = React.useState(null);
    const [visData, setVisData] = React.useState(null);
    const [isLoading, setLoading] = React.useState(true);

    // Import fake data
    const fetchData = () => {
        const url = 'https://capstone.masterworks.cloud/v1/appdata/events?cuid=' + data.CUID;
        const eventSummaryUrl = 'https://capstone.masterworks.cloud/v1/appdata/eventsummary?filter[cuid]=' + data.CUID;
        const visUrl = 'https://capstone.masterworks.cloud/v1/events/visualization'

        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setAllEventsData(actualData);
                setLoading(false);

            })
            .catch((err) => {
                console.log(err.message);
            });

        fetch(eventSummaryUrl)
            .then((response) => response.json())
            .then((actualData) => {
                setSummaryData(actualData);
            })
            .catch((err) => {
                console.log(err.message);
            });


        fetch(visUrl)
            .then((response) => response.json())
            .then((actualData) => {
                setVisData(actualData);
            })
            .catch((err) => {
                console.log(err.message);
            });

        // setSummaryData(require('../data/outputs_176211_summarystats.json'));
        // setVisData(require('../data/fakeVis.json'));
        // Fetch the data and sort every events by time 
        // setAllEventsData(require('../data/outputs_176211_allEvents.json'));
    }


    // Set up chart.js
    Chart.register(...registerables);

    const location = useLocation()    
    const data = location.state.data
    const org = location.state.org

    useEffect(() => {
        fetchData();
      }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    // Function to determined what kind of event type it is 
    const checkEventType = (eventID) => {
        if (eventID == 1) {
            return "Transaction";
        } else if (eventID == 2) {
            return "Visit"
        } else if (eventID == 3) {
            return "Ad Interaction"
        } else if (eventID == 4) {
            return "Send"
        }
    }

    console.log(summaryData)
    let eventsTable;

    if (isLoading) {
        eventsTable = <p className="center">Sorry, we couldn't find any interaction history from this user...</p>
    } else {
        eventsTable = allEventsData.map((item, index)=>{
            return (
                <tr key={index}>
                    <td>{item.Action}</td>
                    <td>{checkEventType(item.EventType)}</td>
                    <td>{item.EventTime}</td>
                    <td>{item.Channel}</td>
                    <td>{item.Platform}</td>
                </tr>
            )
        })
    }
    
    // Decide which visualization to display 
    let visualizationDisplay;
    // Check if we have all the events data or not 
    if (visData != null) {
        var allActivityLabels = visData.allActivityLabels

        var allActivityData = visData.allActivityData

        var visualizationData = {
            labels: allActivityLabels,
            datasets: allActivityData
        };

        visualizationDisplay = <Line data = {visualizationData} />
    }

    // Summary Content 
    let summaryContent;
    if (summaryData != null) {
        summaryContent =  <div className="summary-cards">
        <div className="summary-card">
            <img src="https://capstone.masterworks.cloud/img/page_icon.svg" className="summary-card-icon"/>
            <p className="summary-card-title"><strong>Opened {summaryData[0].openEmail} emails</strong></p>
            <p className="summary-card-desc"><strong>out of {summaryData[0].emailSent} emails we sent</strong></p>
        </div>

        <div className="summary-card">
            <img  src="https://capstone.masterworks.cloud/img/money_icon.svg" className="summary-card-icon"/>
            <p className="summary-card-title"><strong>Gifted {summaryData[0].giftAmount} dollars</strong></p>
            <p className="summary-card-desc"><strong>out of {summaryData[0].visitAmount} visits</strong></p>
        </div>

        <div className="summary-card">
            <img src="https://capstone.masterworks.cloud/img/money_icon.svg" className="summary-card-icon"/>
            <p className="summary-card-title"><strong>Had {summaryData[0].transactionAmount} transactions</strong></p>
            <p className="summary-card-desc"><strong>after every {summaryData[0].avgInteractionBeforeTransaction} interactions on average</strong></p>
        </div>

        <div className="summary-card">
            <img src="https://capstone.masterworks.cloud/img/page_icon.svg"  className="summary-card-icon"/>
            <p className="summary-card-title"><strong>Interacted {summaryData[0].adInteractionAmount} ads</strong></p>
            <p className="summary-card-desc"><strong>out of {summaryData[0].adSent} ads we sent</strong></p>
        </div>
    </div>

    }
    return (
        <div>            
            {/* Title Section */}
            <div className="profile-title">
                {/* Back button */}
                <div className="back-button-content">
                    <Link to="/result" state={{ org: org }}>
                        <button className="back-button">
                            <img src="https://capstone.masterworks.cloud/img/backButton.svg" className="back-button-icon"/>
                            <p className="back-title"><strong>Back to result</strong></p>
                        </button>
                    </Link>
                </div>

                {/* Titles */}
                <h1 className="heading-one mt-4"><strong> {data.FullName} </strong></h1>
                <p className="heading-small-title mt-3"><strong> LAST ACTIVE DATE: {data.LastActive} </strong></p>
            </div>

            {/* Profile Content */}
            <div className="profile-content-background pb-5">
                <div className="profile-content-row">
                    <div className="profile-information">
                        {/* Summary */}
                        <h2 className="profile-information-title">Summary</h2>                            
                        <p className="profile-information-subtitle mt-3">This user has:</p>
                        {summaryContent}
                        <hr className="profile-information-line"/>

                        {/* Visualizations */}
                        <h2 className="profile-information-title">Visualizations</h2>
                        <p className="profile-information-subtitle">Here is a visualization of this user's all activities: </p>
                        
                        <div className="profile-visualization">
                            {visualizationDisplay}
                        </div>

                        <hr className="profile-information-line"/>

                        {/* Full Interaction History */}
                        <h2 className="profile-information-title">Full Interaction History</h2>
                        <p className="profile-information-subtitle">Here is a list of all the interactions this donor had:</p>

                        {/* Adding Table here */}
                        <div className="container table-container">
                            <div className="scrollable">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th>Event Type</th>
                                            <th>Time</th>
                                            <th>Channel</th>
                                            <th>Platform</th>
                                        </tr>
                                    </thead>
                                    <tbody className="overflow-scroll" style={{ maxWidth: "260px" }}>
                                        {eventsTable}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;