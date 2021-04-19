import React from 'react';

//we put the parameter searchchange and onchange do searchchange
const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input type='search' 
            placeholder='Search robots...' className='bg-lightest-blue b--green pa1 ma2'
            onChange={searchChange}
            />
        </div>
    )

}

export default SearchBox;