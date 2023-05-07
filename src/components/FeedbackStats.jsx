import React,{useContext} from 'react';
import {FeedbackContext} from "../context/FeedbackContextProvider"
const FeedbackStats = ({  }) => {
    const {feedback}=useContext(FeedbackContext)
    // const avg = () => {
        //     let rate = feedback.map(item => item.rating)
    //     // let avgRate = Math.floor(rate.reduce((acc, cur) => (acc + cur), 0) / feedback.length)
    //     let avgRate = rate.reduce((acc, cur) => (acc + cur), 0) / feedback.length
    //     if (isNaN(avgRate)) {
    //         return avgRate = 0
    //     } 
    //         return avgRate.toFixed(1).replace(/[.,]0/,"")
       
    // }

    // methode 2
    let avgRate=feedback.reduce((acc,cur)=>(acc+cur.rating),0)/feedback.length
    avgRate=avgRate.toFixed(1).replace(/[.,]0/,"")

    return (
        <div className='feedback-stats'>
            <h4 style={{ fontSize: "1.1rem" }}>{feedback.length} Reviews</h4>
            {/* <h4 style={{ fontSize: "1.1rem" }}>Average Rating: {avg()}</h4> */}

            <h4 style={{ fontSize: "1.1rem" }}>Average Rating: {isNaN(avgRate) ? 0:avgRate}</h4>
        </div>
    );
};

export default FeedbackStats;