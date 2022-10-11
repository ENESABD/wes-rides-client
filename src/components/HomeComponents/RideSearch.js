import React from 'react';

function RideSearch() {

    const handleCheckboxChange = () => {
        
    }

    return (
        <div>
            <input type="text" id="search-ride" name="search-ride" placeholder='Search a ride...'></input>

            <br/>
            <br/>
            
            <input type="checkbox" id="has-car" name="has-car" hidden onChange={handleCheckboxChange}/>
            <label htmlFor="has-car">Someone who has a car</label>

            <br/>
            <br/>

            <input type="checkbox" id="wants-uber" name="wants-uber" hidden onChange={handleCheckboxChange}/>
            <label htmlFor="wants-uber">Someone who wants to split an uber</label>

            <br/>
            <br/>

            <input type="checkbox" id="wants-car" name="wants-car" hidden onChange={handleCheckboxChange}/>
            <label htmlFor="wants-car">Someone who is looking for someone who has a car (, I have a car)</label>
        </div>
    )
}

export default RideSearch;