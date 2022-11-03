import React from 'react';

function ChooseTags({ tags, isDisabled, handleChange }) {
    let tagInputs = [["has_car", "I am willing to drive my car; just looking for someone to join me"],
                    ["wants_uber", "I am willing to split an uber"],
                    ["wants_car", "I am willing to join someone who has a car"]];
    
    return (
        <>

            {tagInputs.map((tagInput) => {
                let [name, label] = tagInput;
                return (
                <li key={name}>
                    <input type="checkbox" id={name} name={name} defaultChecked={!tags ? null : tags[name]} 
                        disabled={isDisabled} onChange={handleChange}/>
                    <label htmlFor={name}>{label}</label>
                    <br/>
                    <br/>
                </li>
                )
            })}
        </>
    )
}

export default ChooseTags;