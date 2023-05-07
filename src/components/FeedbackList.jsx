import React, { useState,useContext } from 'react';
import Feedbackitem from './Feedbackitem';
import styled from "styled-components"
import "./FeedbackList.css"
import { motion } from 'framer-motion';
import {FeedbackContext} from "../context/FeedbackContextProvider"
import { ReverseContext } from '../context/FeedbackContextProvider';

const FeedbackList = ({  }) => {
    const {feedback}=useContext(FeedbackContext)

    const {reverse }=useContext(ReverseContext)


    return (
        <>

            {/* <div className='toggle-switch'>
                Dark Mode:
                <label onClick={clickHandeler} className={`switch-label ${checkboxch && "checkboxch"}`}>
                    <span className='slider'></span>
                    <div>
                    </div>
                </label>
            </div> */}


            {/* intial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} */}


            <div className='feedback-list'>

                {feedback.length ?



                    feedback.map(item =>



                       
                            <Feedbackitem 

                                reverse={reverse} key={item.id} rating={item.rating} text={item.text} id={item.id}
                            />
                      )


                    : "error"

                }

            </div>



        </>

    );
};

export default FeedbackList;