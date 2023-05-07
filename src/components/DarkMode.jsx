import React,{useState,useContext} from 'react';
import { ReverseContext } from '../context/FeedbackContextProvider';
import style from "./DarkMode.css";
const DarkMode = ({}) => {

 
    const [checkboxch, setCheckboxch] = useState(false)
    const {reverse, setReverse}=useContext(ReverseContext)

    const clickHandeler = () => {
        setReverse(! reverse)
        setCheckboxch(!checkboxch)
    }


    return (
        <div>
            
            <div className='toggle-switch'>
                Dark Mode:
                <label onClick={clickHandeler} className={`switch-label ${checkboxch && "checkboxch"}`}>
                    <span className='slider'></span>
                    <div>
                    </div>
                </label>
            </div>

        </div>
    );
};

export default DarkMode;