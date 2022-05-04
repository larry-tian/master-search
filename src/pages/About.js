import React, { useState, useEffect, useLayoutEffect} from 'react';

import { useNavigate } from 'react-router-dom';

import Footer from './Footer'

import '../css/About.css';




const About = () => {

    // Redirect to loading page
    const navigate = useNavigate();

    const directHome = () => {
        navigate('/')
    }

    return (
        <div>
            <div>
                {/* Back button */}
                <div className="back-button-content">
                    <button className="back-button" onClick={directHome}>
                        <img src="https://capstone.masterworks.cloud/img/backButton.svg" className="back-button-icon" />
                        <p className="back-title"><strong>Back to home page</strong></p>
                    </button>
                </div>

                {/* Titles */}
                <h1 className="heading-one mt-4"><strong>About</strong></h1>
                <p className="heading-small-title mt-3"><strong>UW Capstone Project - MasterView</strong></p>
            </div>

            <div className="about-content">
                <p className="about-subtitle">What is MasterView?</p>
                <p>
                    MasterView is a tool that allows Masterworks to understand the history of a specific user’s interaction 
                    with an organization in order to demonstrate the value of their digital marketing work to their clients. 
                </p>
                <p>
                    The goal we were trying to accomplish is to track the user’s path and web interactions 
                    upon making his or her first donation.
                </p>
            </div>

            <div className="about-content">
                <p className="about-subtitle">Who is the sponsor?</p>
                <p>
                    Masterworks is a full-service marketing and fundraising agency that exists to help faith-based 
                    nonprofits achieve their missions through implementing strategies for growth in quality of 
                    engagement or in financial terms. 
                </p>
            </div>

            <div className="about-content">
                <p className="about-subtitle">Why this project?</p>
                <p>
                    Currently, Masterworks have stated that their clients do not believe digital 
                    marketing works, which can jeopardize their client retention in the future.
                </p>
                <p>
                    Our MasterView Tool gives Masterworks the ability to help nonprofits 
                    understand the value of investing in digital marketing by helping them understand 
                    the specific way that a person’s engagement with ads leads to them eventually giving 
                    a gift. They can view a specific user’s history and use this information to validate to 
                    the client that their investments in digital marketing are delivering the intended results.
                </p>
            </div>

            <div className="about-content">
                <p className="about-subtitle">What are the primary features?</p>
                <p>
                    <strong>Feature 1: </strong> Easily find and select an organization that works with Masterworks.
                </p>
                <img className="feature-img" src="https://capstone.masterworks.cloud/img/feature_1.png" alt="select organization feature"/>

                <p className="mt-4">
                    <strong>Feature 2: </strong> Keep track of all the users that interacted with a selected organization.
                </p>
                <img className="feature-img" src="https://capstone.masterworks.cloud/img/feature_2.png" alt="user list feature"/>

                <p className="mt-4">
                    <strong>Feature 3: </strong> Sort the list of users with a simple click.
                </p>
                <img className="feature-img" src="https://capstone.masterworks.cloud/img/feature_3.png" alt="sort the list feature"/>

                <p className="mt-4">
                    <strong>Feature 4: </strong> See the summary of all the interactions from one user.
                </p>
                <img className="feature-img" src="https://capstone.masterworks.cloud/img/feature_4.png" alt="user summary feature"/>

                <p className="mt-4">
                    <strong>Feature 5: </strong> With the visualization, you can easily discover all of the trends of each interaction type.
                </p>
                <img className="feature-img" src="https://capstone.masterworks.cloud/img/feature_5.png" alt="visualization feature"/>

                <p className="mt-4">
                    <strong>Feature 6: </strong> View the whole history of interactions in one place.
                </p>
                <img className="feature-img" src="https://capstone.masterworks.cloud/img/feature_6.png" alt="interaction history table feature"/>
            </div>

            <div className="about-content">
                <p className="about-subtitle">Capstone presentation:</p>
                <p>Here is the video of our Capstone Project Presentation:</p>
            </div>

            <div className="about-content">
                <p className="about-subtitle">Project status:</p>
                <p>
                    This is a University of Washington Information School Capstone 
                    project for Winter/Spring 2022 sponsored by Masterworks.
                </p>
                <p>
                    By June of 2022, we will have handed over all documentation and code to Masterworks.
                </p>
            </div>

            <div className="about-content">
                <p className="about-subtitle">What are reflections?</p>
                <p>
                    It was challenging to map the connection between donations to the various actions of the user
                    since there was a lot of data.
                </p>
                <p>
                    Through aggregating and joining multiple datasets, we established a meaningful story connecting 
                    the user to their first donation, which we used to power our dashboard on the frontend.
                </p>
            </div>

            {/* Meet the Team */}
            <div className="team-info">
                <p className="meet-team-title"><strong>Meet the team</strong></p>
                <div className="container">
                    <div className="row mt-5">
                        <div className="team-member col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <img src="https://capstone.masterworks.cloud/img/albina.jpeg" className="team-img" alt="albina"/>
                            <p className="team-member-name"><strong>Albina Udas</strong></p>
                            <p>Product Manager | UX Researcher</p>
                            <a className="link" href = "mailto:albinau@uw.edu">albinau@uw.edu</a>
                        </div>

                        <div className="team-member col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <img src="https://capstone.masterworks.cloud/img/larry.png" className="team-img" alt="larry"/>
                            <p className="team-member-name"><strong>Larry Tian</strong></p>
                            <p>Frontend Developer | UX Designer</p>
                            <a className="link" href = "mailto:ganlin@uw.edu">ganlin@uw.edu</a>

                        </div>

                        <div className="team-member col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <img src="https://capstone.masterworks.cloud/img/sath.png" className="team-img" alt="sath"/>
                            <p className="team-member-name"><strong>Sathvika Shakhamuri</strong></p>
                            <p>Backend Developer</p>
                            <a className="link" href = "mailto:sathvis@uw.edu">sathvis@uw.edu</a>
                        </div>

                        <div className="team-member col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <img src="https://capstone.masterworks.cloud/img/jason.png" className="team-img" alt="jason"/>
                            <p className="team-member-name"><strong>Jason Tsai</strong></p>
                            <p>Frontend | Backend Developer</p>
                            <a className="link" href = "mailto:tsaij2@uw.edu">tsaij2@uw.edu</a>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default About;