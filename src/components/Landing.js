import React, { useState, useContext } from 'react';
import DarkMode from './DarkMode';
import FeedbackForm from './FeedbackForm';
import FeedbackStats from './FeedbackStats';
import FeedbackList from './FeedbackList';

import Inp from './Inp';
import { FeedbackContext, ReverseContext } from "../context/FeedbackContextProvider"

export const Reverse = React.createContext()
const Landing = () => {
    const { isLoading } = useContext(FeedbackContext)




    {/* <div className='loading-container' ><span className='loading'></span></div> */ }

    return (
        <div className='container'>
            <DarkMode />
            <FeedbackForm />
            <FeedbackStats />

            {/* <Inp /> */}
            {isLoading ? <div className='loading-container' ><span className='loading'></span></div>

                :
                <>

                    <FeedbackList />
                </>

            }



        </div>


    );
};

export default Landing;