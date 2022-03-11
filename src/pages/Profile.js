import React, { useState, useEffect, useLayoutEffect} from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import backButton from '../img/backButton.svg'
import menuButton from '../img/menuButton.svg'
import pageIcon from '../img/page_icon.svg'
import statsIcon from '../img/stats_icon.svg'
import moneyIcon from '../img/money_icon.svg'

import visualizationImg from '../img/visualization.png'
import importantEventImg from '../img/importantEvent.png'
import tableImg from '../img/table.png'

import '../css/Profile.css';

const Profile = () => {

    // States
    const [summaryData, setSummaryData] = React.useState(null);
    const [allTransactionData, setAllTransactionData] = React.useState(null);
    const [importantEventsData, setImportantEventsData] = React.useState(null);
    const [allEventsData, setAllEventsData] = React.useState(null);
    const [isLoading, setLoading] = React.useState(true);

    // Import fake data
    const fetchData = () => {
        setSummaryData(require('../data/outputs_176211_summarystats.json'));
        setAllEventsData(require('../data/outputs_176211_allEvents.json'));
        setLoading(false);
    }

    const location = useLocation()
    const { data } = location.state

    const navigate = useNavigate();

    const directResult = () => {
        navigate('/result');
    }

    useEffect(() => {
        fetchData();
      }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    let eventsTable;
    if (isLoading) {
        eventsTable = <div>
            <p>Loading</p>
        </div>
    } else {
        eventsTable = allEventsData.map((item, index)=>{
            return (
                <tr key={index}>
                    <td>{item.Action}</td>
                    <td>{item.EventTime}</td>
                    <td>{item.Channel}</td>
                    <td>{item.Platform}</td>
                </tr>
            )
        })
    }

    return (
        <div>            
            {/* Title Section */}
            <div className="profile-title">
                {/* Back button */}
                <div className="back-button-content">
                    <button className="back-button" onClick={directResult}>
                            <img src={backButton} className="back-button-icon"/>
                            <p className="back-title"><strong>Back to result</strong></p>
                    </button>
                </div>


                {/* Titles */}
                <h1 className="heading-one mt-4"><strong> {data.first_name + " " + data.last_name} </strong></h1>
                <p className="heading-small-title"><strong> {data.CUID}  | {data.email} </strong></p>
            </div>

            {/* Profile Content */}
            <div className="profile-content-background">
                <div className="profile-content-row">
                    <div className="profile-sidebar">
                        <ul className="profile-sidebar-ul">
                            <li className="profile-sidebar-list">
                                <a><span className="profile-sidebar-text"><strong>Summary</strong></span></a>
                            </li>
                            <li className="profile-sidebar-list">
                                <a><span className="profile-sidebar-text"><strong>Visualizations</strong></span></a>
                            </li>
                            <li className="profile-sidebar-list">
                                <a><span className="profile-sidebar-text"><strong>Timeline</strong></span></a>
                            </li>
                            <li className="profile-sidebar-list">
                                <a><span className="profile-sidebar-text"><strong>History</strong></span></a>
                            </li>
                        </ul>
                    </div>


                    <div className="profile-information">
                        {/* Summary */}
                        <h2 className="profile-information-title">Summary</h2>
                        <p className="profile-information-subtitle">This donor in this month has:</p>

                        <div className="summary-cards">
                            <div className="summary-card">
                                <img src={pageIcon} className="summary-card-icon"/>
                                <p className="summary-card-title"><strong>Sent 7 emails</strong></p>
                                <p className="summary-card-desc"><strong>25% increase from previous month</strong></p>
                            </div>

                            <div className="summary-card">
                                <img src={statsIcon} className="summary-card-icon"/>
                                <p className="summary-card-title"><strong>Saw 8 banner eds</strong></p>
                                <p className="summary-card-desc"><strong>35% increase from previous month</strong></p>
                            </div>

                            <div className="summary-card">
                                <img src={statsIcon} className="summary-card-icon"/>
                                <p className="summary-card-title"><strong>Gifted 10 times</strong></p>
                                <p className="summary-card-desc"><strong>54% increase from previous month</strong></p>
                            </div>

                            <div className="summary-card">
                                <img src={moneyIcon} className="summary-card-icon"/>
                                <p className="summary-card-title"><strong>Gifted 7000 dollars</strong></p>
                                <p className="summary-card-desc"><strong>17% increase from previous mont</strong>h</p>
                            </div>
                        </div>

                        <hr className="profile-information-line"/>

                        {/* Visualizations */}
                        <h2 className="profile-information-title">Visualizations</h2>
                        <p className="profile-information-subtitle">Here are visualizations of all significant interactions that occurred this month:</p>

                        <img src={visualizationImg} className="placeholder-img"/>

                        <hr className="profile-information-line"/>

                        {/* Timeline */}
                        <h2 className="profile-information-title">Important Timeline</h2>
                        <p className="profile-information-subtitle">This is what happened right before this donor made the first gift:</p>

                        <img src={importantEventImg} className="placeholder-img"/>

                        <hr className="profile-information-line"/>

                        {/* Full Interaction History */}
                        <h2 className="profile-information-title">Full Interaction History</h2>
                        <p className="profile-information-subtitle">Here is a list of all the interaction this donor had with SeattleTeam:</p>

                        {/* Adding Table here */}
                        <div className="container">
                            <div className="scrollable">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Event</th>
                                            <th>Time</th>
                                            <th>Source</th>
                                            <th>Detail</th>
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
        </div>
    )
}

export default Profile;