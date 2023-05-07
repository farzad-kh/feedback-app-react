import React, { createContext, useState, useEffect, axios } from 'react';
import { FeedbackData, postFeedbackData, deleteFeedbackData,putFeedbackData} from '../data/FeedbackData';
import { Await } from 'react-router-dom';
export const FeedbackContext = createContext()
export const ReverseContext = createContext()
const FeedbackContextProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([{id:Date.now(),text:"this is feedback",rating:"5"}])
    const [isLoading, setIsloading] = useState(true)
    const getFeedbacks = async () => {

        return setFeedback(await FeedbackData())

    }

    useEffect(() => {

        setTimeout(() => setIsloading(false), 1500)
        setTimeout(() => getFeedbacks(), 1500)

    }, [])

    const [reverse, setReverse] = useState(false)

    // add fedback
    // const addFeedback = async (newFeedback) => {

    //     setFeedback([await postFeedbackData(newFeedback), ...feedback,])




    // }
    const addFeedback = (newFeedback) => {

        setFeedback([newFeedback, ...feedback,])




    }

    console.log(feedback);
    // delete feedback
    // const deletehand = async (id) => {

    //     if (window.confirm("are you sure")) {
           
    //         const remove=feedback.filter(item => item.id !== id)
    //        setFeedback(remove)
    //        await deleteFeedbackData(id) 
           
    //     }
    // }
    const deletehand =(id) => {

        if (window.confirm("are you sure")) {
           
            const remove=feedback.filter(item => item.id !== id)
           setFeedback(remove)
        //    await deleteFeedbackData(id) 
           
        }
    }


    //update feedback data

    // const updateFeedback = async (id, updItem, rating) => {
    //     console.log(updItem);
    //     const putFeedback=await putFeedbackData(id,updItem)
    //     setFeedback(feedback.map(item => item.id === id ? { ...item, ...putFeedback, rating } : item))
      
    //     // or
    //     // setFeedback(feedback.map(item => item.id === id ? {...updItem } : {...item }))
    // }

    const updateFeedback = async (id, updItem, rating) => {
     
      
        setFeedback(feedback.map(item => item.id === id ? { ...item, ...updItem, rating } : item))
      
        // or
        // setFeedback(feedback.map(item => item.id === id ? {...updItem } : {...item }))
    }
    //  console.log(feedback);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })




    // set item to be updated 
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })


    }


    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                setFeedback,
                editFeedback,
                deletehand,
                addFeedback,
                updateFeedback,
                setFeedbackEdit,
                isLoading
            }}>
            <ReverseContext.Provider value={{ reverse, setReverse }}>
                {children}
            </ReverseContext.Provider>

        </FeedbackContext.Provider>
    );
};

export default FeedbackContextProvider;