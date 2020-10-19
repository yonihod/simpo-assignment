import React, {useState} from 'react';
import nextId from "react-id-generator";


const StyledSelect = (props) => {
    const [ id ] = useState(nextId());

    return (
        <div>
            <label htmlFor={id} className={"label uppercase purple text-sm block mb-2"}>{props.label}</label>
            <select onChange={props.onChange} name={props.name} id={id} className={"styled-select purple bold  border-purple-200 w-64 py-2 px-6 border-solid border rounded-2xl styled-input p-1"}>
                <option className={"placeholder"} value={props.placeholder} defaultValue>{props.placeholder}</option>
                {Array.isArray(props.options) && props.options.length ? props.options.map( (option , index) => {
                    return (
                        <option className={"purple-strong border-purple-200 w-64 py-2 px-6 border-solid border rounded-2xl styled-input p-1"} key={index} value={option}>{option}</option>
                    )
                }): null}
            </select>
        </div>
    );
};

export default StyledSelect