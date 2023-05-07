import React, { useEffect, useState,useContext} from 'react';
import Card from "./shared/Card"
import styled from 'styled-components';
import style from "../index.css"
import Button from "./shared/Button"
import RatingSelect from './RatingSelect';
import { ReverseContext,FeedbackContext } from '../context/FeedbackContextProvider';
const SendInput = styled.input`
border: 2px solid #c6c6c6;
appearance: none;
width: 90%;
padding: 12px;
border-radius: 8px;
font-size:1rem;
transition: all ease 250ms;
&:hover{
  border:2px solid rgb(184, 184, 184)
}
&:focus{
  border:2px solid rgb(135, 135, 135)
}
`



const FeedbackForm = ({ }) => {
  const {reverse}=useContext(ReverseContext)
  const {addFeedback,feedbackEdit,updateFeedback,setFeedbackEdit}=useContext(FeedbackContext)



  const [inpVal, setInpVal] = useState("")
  const [ratingFeed, setRatingFeed] = useState(false)

  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  const [selected, setSelected] = useState(false)

  useEffect(()=>{
  if (feedbackEdit.edit) {
    setInpVal(feedbackEdit.item.text)
    setBtnDisabled(false)
    setSelected(feedbackEdit.item.rating)
  }
  
        },[feedbackEdit])





  const changehandler = (e) => {
    let text = e.target.value
    setInpVal(text)
    if (text == '') {
      setBtnDisabled(true)

      setMessage("must not be empty")
      setSelected(false)
    } else if (text.length !== "" && text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage("Text must be at least 10 characters")
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

  }
  const random=()=>{
  const randomId=  Math.floor(Math.random()*1000000)
  return randomId
  }

  const clickSend = (e) => {
    e.preventDefault()
    const feedbackArray =
    {
      id: random(),
      rating: ratingFeed,
      text: inpVal
    }
    if (selected && inpVal.length >=10) {
    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id,feedbackArray,selected)
      setFeedbackEdit(!feedbackEdit.edit)
      alert("edit")
    
    }else{
      addFeedback(feedbackArray)
    }
     

      setMessage("")
      setSelected(false)
      setBtnDisabled(true)
      setInpVal("")
      setRatingFeed("")
     
    } else {
      setMessage("Please set a rate")
    }






  }
console.log(ratingFeed,selected);
  return (
    <Card  reverseCard={reverse} >
      <form style={{ overflow: 'hidden' }} onSubmit={clickSend}>
        <h2 style={{ textAlign: "center", marginBottom: "5px" }}>How wold you rate your service with us ?</h2>
        <RatingSelect selecting={(rate) => setRatingFeed(rate)} selected={selected} setSelected={setSelected} />
        <div className='input-group'>
          <SendInput onChange={changehandler} value={inpVal} type='text' placeholder='Write a review' />
          <Button type={"submit"} version={btnDisabled ? "secondary" : "primary"} isDisabled={btnDisabled}  >Send</Button>
        </div>
        <div className={`message ${message && "err"}`}>{message}</div>
      </form>

    </Card>


  );
};

export default FeedbackForm;