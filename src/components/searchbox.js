import React from "react";

const Searchbox = ({searchfield,onSearchChange})=>{
    return(
        <div className="pa2">
            <input 
                className='tc i ttu pa3 ba b-green bg-lightest-blue'
                type="Search Robots" 
                placeholder="Search Robots"
                onChange={onSearchChange}
            />            
        </div>
    );
}

export default Searchbox;