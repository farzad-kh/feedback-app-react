import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
const Inp = () => {

    const [co, setCo] = useState(false)
    const [co2, setCo2] = useState(false)
    const [co3, setCo3] = useState(false)
    const inpp=useRef()
    const inpp2=useRef()
    const inpp3=useRef()

    const aa = (e) => {
        // e.currentTarget.style.background="blue"
        // e.currentTarget.className="aa bb"
        if (inpp.current==e.target) {
            setCo(!co) 
        }else if(inpp2.current==e.target){
            setCo2(!co2)
        }else{
            setCo3(!co3)
        }
    }
    return (
        <div>
            <input ref={inpp} className={co ? "color1" : "color2"} onClick={e => aa(e)} />
            <input ref={inpp2} className={co2 ? "color1" : "color2"} onClick={e => aa(e)} />
            <input ref={inpp3} className={co3 ? "color1" : "color2"} onClick={e => aa(e)} />
        </div>
    );
};

export default Inp;



// ba setState titop ro true false mikonim focus ro to css midim