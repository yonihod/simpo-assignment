import React, {useState} from 'react';
import nextId from "react-id-generator";


const StyledInput = (props) => {
    const [ id ] = useState(nextId());

    return (
        <div>
            <label htmlFor={id} className={"label uppercase purple text-sm block mb-2"}>{props.label}</label>
            <input id={id} name={props.name} onChange={props.onChange} type={props.type} placeholder={props.placeholder} className={"bold purple-strong border-purple-200 w-64 py-2 px-6 border-solid border rounded-2xl styled-input p-1"}></input>
        </div>
    );
};

export default StyledInput