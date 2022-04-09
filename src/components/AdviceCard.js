import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdviceCard(props) {

    // https://api.adviceslip.com/advice

    const [advice, setAdvice] = useState([])

    useEffect(() => {
        axios.get("https://api.adviceslip.com/advice").then((res) => {
            setAdvice(res.data.slip)
            console.log(res.data.slip)
        })
    }, [])

    return (
        <div className='advice-card'>
            <div>
                <p id="advice-id">Advice #{advice.id}</p>
                <h3 id="advice">"{advice.advice}"</h3>
                <img src="images/pattern-divider-mobile.svg" />
                <button onClick={() => window.location.reload()}>
                    <img id="btn-dice" src="images/icon-dice.svg" />
                </button>
            </div>
        </div>
    );
}

export default AdviceCard;