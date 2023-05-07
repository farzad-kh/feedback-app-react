import React, { useState, useContext} from 'react';
import styles from "./Feedbackitem.css"
import styled from 'styled-components';


import { FaTimes, FaEdit } from "react-icons/fa"
import Card from './shared/Card';
import FeedbackForm from './FeedbackForm';
import { Reverse } from '../App';
import { FeedbackContext } from '../context/FeedbackContextProvider';
const Feedbackitem = ({ rating, text, reverse, id }) => {
    const FeedbackitemData={rating,text,id}
    const { deletehand,editFeedback} = useContext(FeedbackContext)



    return (


        <Card reverseCard={reverse}>

            <div className='num-display'>{rating}</div>
            <div className='btn-container'>
                <button className='close' onClick={() => deletehand(id)} >
                    <FaTimes color={reverse ? "#fff" : "black"} /></button>

                <button className='edit' onClick={()=>editFeedback(FeedbackitemData)}><FaEdit color={reverse ? "#c340df": "darkcyan"} /></button>
            </div>
            <div className='text-display'>{text} </div>

        </Card>


    );
};

export default Feedbackitem;