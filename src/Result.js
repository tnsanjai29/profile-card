import React from "react";
import './App.css';
function Result (props) {
    let result;
    if(props.term){
    if(props.term > props.secrtNum){
        result = "higher";
    }
    else if(props.term < props.secrtNum){
        result = "lower";
    }
    else{
        result = "Correct";
    }
    }

    return (<>
    <h3>You Guessed:{result}</h3>
    <p>Hint:</p>
    <h4>Lower - Increase Value <br />
        Higher - Decrease Value
    </h4>
    </>
    );
}

export default Result;
